import {
  createRef,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Line, BlockStyleHandler } from "./Line.tsx";
import { isBlock, isFirstLine, isLastLine, parsePrefix } from "../util.ts";
import { TextPopupHandler, Keyword } from "./TextareaWithMenu.tsx";

export interface LinePopupHandler {
  name: string;
  handler: (lines: string[], range?: number[]) => void;
}

export interface EditorProps {
  //initialLines: string[];
  lines: {body: string, key: number}[];
  setLines: React.Dispatch<React.SetStateAction<{body: string, key: number}[]>>;
  onChange: (lines: string[]) => void;
  onLinkClick: ((title: string) => void)
  onSubLinkClick: ((title: string) => void)
  onMagicFunc: ((row: number) => () => void)
  textPopupHandlers: TextPopupHandler[];
  linePopupHandlers: LinePopupHandler[];
  keywords: Keyword[];
  blockStyles: Record<string, BlockStyleHandler>;
}
interface Cursor {
  row: number;
  col: number;
  colEnd?: number;
  direction?: "none" | "forward" | "backward";
}
export const Editor: React.FC<EditorProps> = (props) => {
  //const [lines, setLines] = useState(props.initialLines);
  const lines = props.lines;
  const setLines = props.setLines;
  let maxKey = 0
  lines.forEach((l) => {
    if(l.key > maxKey){
      maxKey = l.key
    }
  })
  const keySequence = useRef(maxKey);

  useEffect(() => {
    let maxKey = 0
    lines.forEach((l) => {
      if(l.key > maxKey){
        maxKey = l.key
      }
    })
    keySequence.current = maxKey
  }, [lines]);

  const newKey = () => {
    keySequence.current = keySequence.current + 1
    return keySequence.current
  }

  const onChange = props.onChange;
  useEffect(() => {
    onChange(lines.map((l) => l.body));
  }, [lines, onChange]);

  const inProcess = useRef(false);
  const [cursor, setCursor] = useState<Cursor>({
    row: 0,
    col: 0,
    colEnd: -1,
    direction: "none",
  });
  const [selectRange, setSelectRange] = useState([0, 0]);

  const findLine = (e?: Node | null): HTMLElement | null => {
    if (e == null) return null;
    if (e instanceof HTMLElement && e.classList.contains("line")) return e;
    return findLine(e.parentElement);
  };

  const editorRef = useRef<HTMLDivElement>(null);

  let fromLine: HTMLElement | null;
  let toLine: HTMLElement | null;
  let selection = false; // now in selection mode?
  const changeSelection = () => {
    selection = true;
    const sel = document.getSelection();
    if (sel){
      fromLine = findLine(sel.anchorNode);
      toLine = findLine(sel.focusNode);
      if(fromLine?.parentNode != editorRef.current){
        fromLine = null
        toLine = null
      }
      if (fromLine !== toLine) {
        setCursor({ row: -1, col: 0 });
      }
    }
  };

  const selectionEnd = () => {
    if (selection) {
      selection = false;
      if (fromLine && toLine && fromLine !== toLine) {
        const range = new Range();
        range.setStart(fromLine, 0);
        range.setEnd(toLine, toLine.children.length);
        document.getSelection()!.empty();
        document.getSelection()!.addRange(range);
        if (!fromLine.dataset?.lineno) {
          throw new Error("fromLine.dataset?.lineno is undefined");
        }
        const fromNo = parseInt(fromLine.dataset?.lineno);
        if (!toLine.dataset?.lineno) {
          throw new Error("toLine.dataset?.lineno is undefined");
        }
        const toNo = parseInt(toLine.dataset?.lineno);
        setSelectRange([fromNo, toNo]);
      }
    }
  };
  const selectThisLine = () => () => {
    setCursor(() => ({ row: -1, col: 0 }));
    selection = true;
  };

  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!popupRef.current) return;
    if (selectRange[1] - selectRange[0] >= 1) {
      popupRef.current.style.display = "block";
      const focusNode = document.getSelection()?.focusNode;
      if (!focusNode) throw new Error("focusNode is null");
      if (!(focusNode instanceof Element)) {
        throw new Error("focusNode is not Element");
      }
      const rect = focusNode.getBoundingClientRect();

      const y = rect.bottom;
      const x = rect.x + rect.width / 2;
      popupRef.current.style.left = x + "px";
      popupRef.current.style.top = y + "px";
    } else {
      popupRef.current.style.display = "none";
    }
  }, [selectRange]);

  const paste =
    (no: number): React.ClipboardEventHandler<HTMLTextAreaElement> => (e) => {
      const body = e.clipboardData.getData("text");
      const lines = body.split(/\r\n|\n/);
      if (lines.length === 1) {
        // normal paste
        return true;
      }
      const out: string[] = [];
      let blockContent: string[] = [];
      let inBlock = false;
      let blockPrefix = "";
      
      lines.forEach((l) => {
        const blockMatch = l.match(/^(\s*)(```.*)/); // ```
        if (inBlock) {
          const isBlockEnd = l.indexOf(blockPrefix + "```") === 0;
          if (isBlockEnd) {
            out.push(blockContent.join("\n"));
            inBlock = false;
            blockContent = [];
          } else {
            if (blockPrefix !== "" && l.indexOf(blockPrefix) !== 0) {
              // invalid block
              out.push(blockContent.join("\n"));
              inBlock = false;
              blockContent = [];
              out.push(l);
            }
            blockContent.push(l.slice(blockPrefix.length));
          }
        } else {
          if (blockMatch) {
            inBlock = true;
            blockPrefix = blockMatch[1];
            blockContent.push(l);
          } else {
            out.push(l);
          }
        }
      });
      if (blockContent.length !== 0) {
        out.push(blockContent.join("\n"));
      }
      setLines((prev) => {
        prev[no] = {body: prev[no].body + out[0], key: prev[no].key};
        prev.splice(no + 1, 0, ...out.slice(1).map((l) => {return {body: l, key: newKey()}}));
        return [...prev];
      });
      e.preventDefault();
      return false;
    };

  // execute only first
  useEffect(() => {
    document.addEventListener("selectionchange", changeSelection);
    document.addEventListener("pointerup", selectionEnd);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const linesRef = useRef<RefObject<HTMLTextAreaElement>[]>([]);
  useEffect(() => {
    if (cursor.row !== -1 && inProcess.current === false) {
      const focusLine = linesRef.current[cursor.row];
      if(!focusLine)return
      if (!focusLine.current) return;
      focusLine.current.focus();
      let end = cursor.colEnd;
      if (end === undefined || end === -1) {
        end = cursor.col;
      }
      console.log("EFFECT", "col:", cursor.col, "end:", end);
      focusLine.current.setSelectionRange(cursor.col, end, cursor.direction);

      // workadound for Android Chrome
      const styleSheets = document.styleSheets;
      for (const styleSheet of styleSheets) {
        const rules = styleSheet.cssRules || styleSheet.rules;
        for (const rule of rules) {
          if (rule instanceof CSSStyleRule && rule.selectorText === '.line') {
            rule.style.wordBreak = 'normal'
          }
        }
      }
      setTimeout(() => {
        for (const styleSheet of styleSheets) {
          const rules = styleSheet.cssRules || styleSheet.rules;
          for (const rule of rules) {
            if (rule instanceof CSSStyleRule && rule.selectorText === '.line') {
              rule.style.wordBreak = 'break-all'
            }
          }
        }
      }, 100);
    }
  }, [cursor, lines]);
  lines.forEach((_, i) => {
    linesRef.current[i] = createRef();
  });

  return (
    <div className="editor" ref={editorRef}>
      {lines.map((line, index) => (
        <Line
          key={line.key}
          key_debug={line.key}
          ref={linesRef.current[index]}
          isFocus={index === cursor.row}
          isSelect={selectRange[0] <= index && index <= selectRange[1]}
          row={index}
          value={line.body}
          textPopupHandlers={props.textPopupHandlers}
          onMagicFunc={props.onMagicFunc(index)}
          keywords={props.keywords}
          blockStyles={props.blockStyles}
          selectThisLine={selectThisLine()}
          setLine={(prefix) => (s) =>
            ((i) => {
              setLines((prev) => {
                prev[i].body = prefix + s;
                return [...prev];
              });
            })(index)}
          setCursor={(col) =>
            ((index) => {
              setCursor((prev) => {
                return {
                  row: index,
                  col: col,
                  colEnd: -1,
                  direction: prev.direction,
                };
              });
            })(index)}
          onPaste={paste}
          onCompositionStart={() => {
            inProcess.current = true;
            console.log("composition start");
          }}
          onCompositionEnd={() => {
            inProcess.current = false;
            console.log("composition end");
          }}
          onChange={(prefix) => (e) =>
            ((i) => {
              console.log("onChange", inProcess.current);
              if (inProcess.current === false) {
                const currentColumn = e.target.selectionStart;
                const currentColumnEnd = e.target.selectionEnd;
                const currentDirection = e.target.selectionDirection;
                setCursor((prev) => {
                  return {
                    row: prev.row,
                    col: currentColumn,
                    colEnd: currentColumnEnd,
                    direction: currentDirection,
                  };
                });
              }
              setLines((prev) => {
                prev[i].body = prefix + e.target.value;
                return [...prev];
              });
            })(index)}
          onKeyDown={(prefix, line) => (e) => {
            let currentColumn = e.currentTarget.selectionStart;
            let currentColumnEnd = e.currentTarget.selectionEnd;
            let currentDirection = e.currentTarget.selectionDirection;
            
            switch (e.key) {
              case "ArrowLeft": {
                  if (
                    e.currentTarget != null &&
                    e.currentTarget.selectionStart === 0 &&
                    e.currentTarget.selectionEnd === 0
                  ) {
                    e.preventDefault();
                    setCursor((prev) => {
                      if (prev.row === 0) return prev;
                      const nextCol = lines[cursor.row - 1].body.length;
                      return {
                        row: prev.row - 1,
                        col: nextCol,
                        colEnd: -1,
                        direction: currentDirection,
                      };
                    })
                    break
                  }
                  if (!e.shiftKey) {
                    currentColumn--;
                    currentColumnEnd = -1;
                  } else {
                    if (currentColumn == currentColumnEnd) {
                      currentColumn--;
                      currentDirection = "backward";
                    } else if (currentDirection === "forward") {
                      currentColumnEnd--;
                    } else if (currentDirection === "backward") {
                      currentColumn--;
                    }
                  }

                  e.preventDefault();
                  setCursor((prev) => {
                    return {
                      row: prev.row,
                      col: currentColumn,
                      colEnd: currentColumnEnd,
                      direction: currentDirection,
                    };
                  })
                break
              }
              case "ArrowRight": {
                const maxCol = -prefix.length + lines[cursor.row].body.length;
                if (
                  e.currentTarget != null &&
                  e.currentTarget.selectionStart === maxCol &&
                  e.currentTarget.selectionEnd === maxCol
                ) {
                  setCursor((prev) => {
                    if (prev.row === lines.length - 1) return prev;
                    e.preventDefault();
                    return {
                      row: prev.row + 1,
                      col: 0,
                      colEnd: -1,
                      direction: currentDirection,
                    };
                  })
                  break
                }
                if (!e.shiftKey) {
                  if (currentColumn < currentColumnEnd) {
                    currentColumn = currentColumnEnd;
                  }
                  currentColumn++;
                  currentColumnEnd = -1;
                } else {
                  if (currentDirection === "forward") {
                    currentColumnEnd++;
                  } else if (currentDirection === "backward") {
                    currentColumn++;
                  }
                }
                e.preventDefault();
                setCursor((prev) => {
                  return {
                    row: prev.row,
                    col: currentColumn,
                    colEnd: currentColumnEnd,
                    direction: currentDirection,
                  };
                })
                break
              }
              case "ArrowUp":
                if (
                  isBlock(line) &&
                  e.currentTarget != null &&
                  !isFirstLine(e.currentTarget.selectionStart, line)
                ) {
                  //return prev;
                } else {
                  e.preventDefault();
                  setCursor((prev) => {
                    if (prev.row === 0 || e.currentTarget == null) return prev;
                    return {
                      row: prev.row - 1,
                      col: e.currentTarget.selectionStart,
                      colEnd: -1,
                      direction: currentDirection,
                    };
                  })
                }
                break;
              case "ArrowDown":
                if (
                  isBlock(line) &&
                  e.currentTarget != null &&
                  !isLastLine(e.currentTarget.selectionStart, line)
                ) {
                  //return prev;
                } else {
                  setCursor((prev) => {
                    if (prev.row === lines.length - 1 || e.currentTarget == null) return prev;
                    e.preventDefault();
                    return {
                      row: prev.row + 1,
                      col: e.currentTarget.selectionStart,
                      colEnd: -1,
                      direction: currentDirection,
                    };
                  })
                }
                break;
              case "Backspace":
                if(!e.currentTarget)return
                if (
                  prefix.length !== 0 &&
                  ((e.currentTarget.selectionStart === 0 &&
                    e.currentTarget.selectionEnd === 0) ||
                    (e.currentTarget.selectionStart === 1 &&
                      e.currentTarget.selectionEnd === 1))
                ) {
                  if (prefix.length !== 0) {
                    // インデントを浅くする
                    setLines((prevLines) => {
                      if (prefix.length === 1) { // prefix == '-'
                        prevLines[cursor.row].body = e.currentTarget.value.slice(1);
                        currentColumn--;
                        if (currentColumn === -1) {
                          currentColumn++;
                        }else if(currentColumn === 0 && currentColumnEnd !== 0){
                          // 条件を限定しすぎか？
                          currentColumnEnd = 0;
                        }
                      } else if (prefix.length > 0) {
                        prevLines[cursor.row].body = prefix.slice(2) + e.currentTarget.value;
                      }
                      return [...prevLines];
                    });
                    e.preventDefault();
                  }
                } else if (
                  e.currentTarget != null &&
                  e.currentTarget.selectionStart === 0 &&
                  e.currentTarget.selectionEnd === 0
                ) {
                  if (cursor.row === 0) break;
                  const parts = parsePrefix(lines[cursor.row - 1].body)
                  const nextCol = parts[1].length;
                  setLines((prevLines) => {
                    // 上の行と結合する
                    if (isBlock(prevLines[cursor.row - 1].body)) {
                      prevLines[cursor.row - 1].body += "\n" + prevLines[cursor.row].body;
                    } else {
                      prevLines[cursor.row - 1].body += prevLines[cursor.row].body;
                    }
                    prevLines.splice(cursor.row, 1);
                    return [...prevLines];
                  });
                  setCursor((prev) => {
                    return {
                      row: prev.row - 1,
                      col: nextCol,
                      colEnd: -1,
                      direction: currentDirection,
                    };
                  })
                  e.preventDefault();
                  break
                }
                //currentColumn -- // これは無しでOK、ブラウザのデフォルトの挙動でカーソルが移動する
                setCursor((prev) => {
                return {
                  row: prev.row,
                  col: currentColumn,
                  colEnd: currentColumnEnd,
                  direction: currentDirection,
                };
                })
              break
              case "Tab":
                setLines((prevLines) => {
                  if(!e.currentTarget){
                    return prevLines
                  }
                  if (e.shiftKey) {
                    if (prefix.length === 1) { // prefix == '-'
                      prevLines[cursor.row].body = e.currentTarget.value.slice(1);
                      currentColumn--;
                    } else if (prefix.length > 0) {
                      prevLines[cursor.row].body = prefix.slice(2) + e.currentTarget.value;
                    }
                  } else {
                    let bullet = "-";
                    if (isBlock(e.currentTarget.value)) {
                      bullet = " ";
                    }
                    if (prefix.length === 0) {
                      prevLines[cursor.row].body = bullet + " " + e.currentTarget.value;
                      currentColumn++;
                    } else {
                      prevLines[cursor.row].body = "  " + prefix + e.currentTarget.value;
                    }
                  }
                  // これが無いと箇条書き解除時に行末にカーソルが移動する時がある
                  /*
                  setCursor((prev) => {
                    return {
                      row: prev.row,
                      col: currentColumn,
                      colEnd: -1,
                      direction: currentDirection,
                    };
                  });*/
                  return [...prevLines];
                });
                e.preventDefault();
                setCursor((prev) => {
                  return {
                    row: prev.row,
                    col: currentColumn,
                    colEnd: -1,
                    direction: currentDirection,
                  };
                })
              break
              case "Enter":
                if (e.keyCode === 13) {
                  if (isBlock(line) && !e.shiftKey) {
                    break
                  } else {
                    if(e.currentTarget == null || e.currentTarget.selectionStart === undefined){
                      e.preventDefault();
                      break
                    }
                    let nextCol = 0;
                    const ss = e.currentTarget.selectionStart
                    setLines((prevLines) => {
                      const column = prefix.length + ss;
                      let afterCursor = prevLines[cursor.row].body.slice(column);
                      if (isBlock(line)) {
                        const l = prevLines[cursor.row].body;
                        if (l[l.length - 1] === "\n") {
                          prevLines[cursor.row].body = prevLines[cursor.row].body.slice(
                            0,
                            column - 1,
                          ); // remove last \n
                        } else {
                          prevLines[cursor.row].body = prevLines[cursor.row].body.slice(
                            0,
                            column,
                          );
                        }
                        if (afterCursor.length > 0) {
                          if (afterCursor[0] === "\n") {
                            afterCursor = afterCursor.slice(1);
                          }
                        }
                      } else {
                        prevLines[cursor.row].body = prevLines[cursor.row].body.slice(
                          0,
                          column,
                        );
                      }
                      if (prefix.length !== 0) {
                        prevLines.splice(
                          cursor.row + 1,
                          0,
                          {body: prefix + " " + afterCursor, key: newKey()},
                        );
                        nextCol = 1
                      } else {
                        prevLines.splice(cursor.row + 1, 0, {body: afterCursor, key: newKey()});
                      }
                      return [...prevLines];
                    });
                    e.preventDefault();
                    setCursor((prev) => {
                      return {
                        row: prev.row + 1,
                        col: nextCol,
                        colEnd: -1,
                        direction: currentDirection,
                      };
                    })
                  }
                } else {
                  break
                }
                break
              case " ":
                // 行頭の場合はインデントを生成する
                console.log("space", currentColumn);
                if (
                  currentColumn === 0 ||
                  (currentColumn === 1 && prefix.length >= 1)
                ) {
                  setLines((prevLines) => {
                    if(!e.currentTarget){
                      return prevLines
                    }
                    let bullet = "-";
                    if (isBlock(e.currentTarget.value)) {
                      bullet = " ";
                    }
                    if (prefix.length === 0) {
                      prevLines[cursor.row].body = bullet + " " +
                        e.currentTarget.value;
                      currentColumn++;
                    } else {
                      prevLines[cursor.row].body = "  " + prefix +
                        e.currentTarget.value;
                    }
                    return [...prevLines];
                  });
                  e.preventDefault();
                } else {
                  //currentColumn ++ // これは不要、ブラウザのデフォルトの挙動でカーソルを移動する
                }
                setCursor((prev) => {
                  return {
                    row: prev.row,
                    col: currentColumn,
                    colEnd: -1,
                    direction: currentDirection,
                  };
                })
                break
              default:
                //currentColumn ++ // これは不要、ブラウザのデフォルトの挙動でカーソルを移動する
                //return prev;
            }
          }}
          onLinkClick={props.onLinkClick}
          onSubLinkClick={props.onSubLinkClick}
          onClick={(e) => {
            /*
            let countCharacter = (e) => {
              if(e.nodeType === Node.TEXT_NODE){
                return e.nodeValue.length
              }else if(e.nodeType === Node.ELEMENT_NODE){
                if(e.className === "for-copy-inline"){
                  return 0
                }
                // TODO: 見出しとリスト以外の書式でうまく動くか不明
                return countCharacter(e.firstChild)
              }
              throw new Error("unknown nodeType", e.nodeType)
            }
            */
            if (cursor.row !== index) {
              /*
              let selection = document.getSelection()
              let focusNode = selection.focusNode
              let elmNode = focusNode.parentNode
              let count = 0;
              for(let i = 0; i < elmNode.childNodes.length; i ++){
                let e = elmNode.childNodes[i]
                if(e === focusNode){
                  count += selection.focusOffset
                  break;
                }else{
                  count += countCharacter(e)
                }
              }
              */
              // ここ本来は<textarea>にonclickを入れるか、type assertionでtextareaでなかったときにエラーを出すべき
              const count = (e.target as HTMLTextAreaElement).selectionStart;
              setSelectRange([index, index]);
              setCursor(() => ({ row: index, col: count }));
            }
          }}
        />
      ))}
      <div className="popup" ref={popupRef}>
        {props.linePopupHandlers.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              if (globalThis.ontouchstart !== null) {
                item.handler(
                  lines.slice(selectRange[0], selectRange[1] + 1).map((l) => l.body),
                  selectRange,
                );
                setSelectRange([selectRange[1], selectRange[1]]);
              }
            }}
            onTouchStart={() => {
              item.handler(lines.slice(selectRange[0], selectRange[1] + 1).map((l) => l.body));
              setSelectRange([selectRange[1], selectRange[1]]);
            }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editor;
