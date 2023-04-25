import React, { useState, useRef, createRef, useEffect } from 'react';
import Line from './Line';
import {isBlock, isFirstLine, isLastLine} from '../utils/util'

export const Editor = (props) => {
  const [cursor, setCursor] = useState({
    row: 0,
    col: 0,
  });
  const [lines, setLines] = useState(props.lines);
  const [selectRange, setSelectRange] = useState([0,0]);

  const findLine = (e) => {
    if(e == null)return null;
    if(e.classList && e.classList.contains("line")){return e}
    return findLine(e.parentNode)
  }

  let fromLine, toLine
  let selection = false // now in selection mode?
  const changeSelection = (e) => {
    selection = true
    const sel = document.getSelection()
    fromLine = findLine(sel.anchorNode)
    toLine = findLine(sel.focusNode)
  }

  const selectionEnd = (e) => {
    if(selection){
      selection = false
      if(fromLine && toLine && fromLine !== toLine){
        const range = new Range();
        range.setStart(fromLine, 0)
        range.setEnd(toLine, toLine.children.length)
        document.getSelection().empty()
        document.getSelection().addRange(range)
        const fromNo = parseInt(fromLine.dataset.lineno)
        const toNo = parseInt(toLine.dataset.lineno)
        setSelectRange([fromNo, toNo])
      }
    }
  }

  const paste = (no) => (e) => {
    const body = e.clipboardData.getData('text')
    const lines = body.split(/\r\n|\n/)
    if(lines.length === 1){
      // normal paste
      return true;
    }
    const out = [];
    let blockContent = []
    let inBlock = false
    let blockPrefix = 0;
    lines.forEach((l) => {
      const blockMatch = l.match(/^(\s*)(```.*)/) // ```
      if(inBlock){
        const isBlockEnd = (l.indexOf(blockPrefix + "```") === 0);
        if(isBlockEnd){
          out.push(blockContent.join("\n"))
          inBlock = false;
          blockContent = []
        }else{
          if(blockPrefix !== "" && l.indexOf(blockPrefix) !== 0){
            // invalid block
            out.push(blockContent.join("\n"))
            inBlock = false;
            blockContent = []
            out.push(l)
          }
          blockContent.push(l.slice(blockPrefix.length))
        }
      }else{
        if(blockMatch){
          inBlock = true;
          blockPrefix = blockMatch[1];
          blockContent.push(l)
        }else{
          out.push(l)
        }
      }
    })
    if(blockContent.length !== 0){
      out.push(blockContent.join("\n"))
    }
    setLines((prev) => {
      prev[no] = prev[no] + out[0];
      prev.splice(no + 1, 0, ...out.slice(1))
      return [...prev];
    })
    e.preventDefault()
    return false
  }

  // execute only first
  useEffect(() =>{
    document.addEventListener("selectionchange", changeSelection);
    document.addEventListener("pointerup", selectionEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const linesRef = useRef([]);
  useEffect(() =>{
    const focusLine = linesRef.current[cursor.row]
    focusLine.current.focus()
    focusLine.current.setSelectionRange(cursor.col, cursor.col);
  } ,[cursor]);

  lines.forEach((_, i) => {
    linesRef.current[i] = createRef()
  });

  return (
    <div
      className="editor"
    >
      {lines.map((line, index) => (
        <Line
          key={index}
          ref={linesRef.current[index]}
          isFocus={index === cursor.row}
          isSelect={selectRange[0] <= index && index <= selectRange[1]}
          row={index}
          value={line}
          onPaste={paste}
          onChange={(prefix) => (e) => ((i) => {
            setLines((prev) => {
              prev[i] = prefix + e.target.value;
              return [...prev];
            })
          })(index)}
          onKeyDown={(prefix, line) => (e) => {
            setCursor((prev) => {
              switch(e.key) {
                case "ArrowLeft":
                  if(e.target.selectionStart === 0 && e.target.selectionEnd === 0){
                    if(prev.row === 0)return prev;
                    const nextCol = lines[cursor.row - 1].length
                    e.preventDefault();
                    return { row: prev.row - 1, col: nextCol };
                  }
                  return prev
                case "ArrowRight":
                  const maxCol = - prefix.length + lines[cursor.row].length
                  if(e.target.selectionStart === maxCol && e.target.selectionEnd === maxCol){
                    if(prev.row === lines.length - 1)return prev;
                    e.preventDefault();
                    return { row: prev.row + 1, col: 0 };
                  }
                  return prev
                case "ArrowUp":
                  if(isBlock(line) && !isFirstLine(e.target.selectionStart, line)){
                    return prev
                  }else{
                    if(prev.row === 0)return prev;
                    e.preventDefault();
                    return { row: prev.row - 1, col: e.target.selectionStart };
                  }
                case "ArrowDown":
                  if(isBlock(line) && !isLastLine(e.target.selectionStart, line)){
                    return prev
                  }else{
                    if(prev.row === lines.length - 1)return prev;
                    e.preventDefault();
                    return { row: prev.row + 1, col: e.target.selectionStart };
                  }
                case "Backspace":
                  if(e.target.selectionStart === 0 && e.target.selectionEnd === 0){
                    if(prev.row === 0)return prev;
                    const nextCol = lines[cursor.row - 1].length
                    setLines((prevLines) => {
                      // 上の行と結合する
                      prevLines[prev.row - 1] += prevLines[prev.row];
                      prevLines.splice(prev.row, 1);
                      return [...prevLines];
                    });
                    e.preventDefault();
                    return { row: prev.row - 1, col: nextCol};
                  }
                  return prev;
                case "Tab":
                  setLines((prevLines) => {
                    if(e.shiftKey){
                      if(prefix.length === 1){ // prefix == '-'
                        prevLines[prev.row] = e.target.value.slice(1);
                      }else if(prefix.length > 0){
                        prevLines[prev.row] = prefix.slice(2) + e.target.value;
                      }
                    }else{
                      let bullet = "-"
                      if(isBlock(e.target.value)){
                        bullet = " "
                      }
                      if(prefix.length === 0){
                        prevLines[prev.row] = bullet + " " + e.target.value;
                      }else{
                        prevLines[prev.row] = "  "+ prefix + e.target.value;
                      }
                    }
                    return [...prevLines];
                  })
                  e.preventDefault();
                  return prev;
                case "Enter":
                  if(e.keyCode === 13){
                    if(isBlock(line)){
                      return prev;
                    }else{
                      setLines((prevLines) => {
                        const column = prefix.length + e.target.selectionStart;
                        const afterCursor = prevLines[prev.row].slice(column);
                        prevLines[prev.row] = prevLines[prev.row].slice(0, column);
                        if(prefix.length !== 0){
                          prevLines.splice(prev.row + 1, 0, prefix + " " + afterCursor);
                        }else{
                          prevLines.splice(prev.row + 1, 0, afterCursor);
                        }
                        return [...prevLines];
                      });
                      e.preventDefault();
                      return { row: prev.row + 1, col: prefix.length };
                    }
                  }else{
                    return prev;
                  }
                default:
                  // 同じobjectを返せば再レンダリングされない
                  return prev;
              }
            })
          }}
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
            if(cursor.row !== index){
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
              const count = e.target.selectionStart
              setSelectRange([index, index])
              setCursor((prev) => {
                return {row: index, col: count};
              })
            }
          }}
        />
      ))}
    </div>);
};

export default Editor
