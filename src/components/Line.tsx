import {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { isBlock, isComment, parseBlock, parsePrefix } from "../util.ts";
import { TextareaWithMenu, TextPopupHandler, Keyword } from "./TextareaWithMenu.tsx";
import { useForwardRef } from "../useForwardRef.ts";

export type BlockStyleHandler = (body: string, setRenderElement: React.Dispatch<React.SetStateAction<React.JSX.Element | undefined>>) => React.JSX.Element

export interface LineProps {
  value: string;
  row: number;
  key_debug: number;
  isFocus: boolean;
  isSelect: boolean;
  keywords: Keyword[];
  blockStyles: Record<string, BlockStyleHandler>;
  textPopupHandlers: TextPopupHandler[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
  onLinkClick: ((title: string) => void)
  onSubLinkClick: ((title: string) => void)
  onMagicFunc: (() => void)
  onChange: (prefix: string) => React.ChangeEventHandler<HTMLTextAreaElement>;
  onKeyDown: (
    prefix: string,
    value: string,
  ) => React.KeyboardEventHandler<HTMLTextAreaElement>;
  onCompositionStart: React.CompositionEventHandler<HTMLTextAreaElement>;
  onCompositionEnd: React.CompositionEventHandler<HTMLTextAreaElement>;
  onPaste: (row: number) => React.ClipboardEventHandler<HTMLTextAreaElement>;
  setLine: (prefix: string) => (select: string) => void;
  setCursor: (col: number) => void;
  selectThisLine: () => void;
}
export const Line = forwardRef<HTMLTextAreaElement, LineProps>(
  function Line(props, _ref) {
    const ref = useForwardRef(_ref);
    const [renderElement, setRenderElement] = useState<React.JSX.Element>();
    useEffect(() => {
      if (!ref.current) return;

      // save style
      const preDisplay = ref.current.style.display;
      // reset style for calculation
      ref.current.style.display = "block";
      ref.current.style.height = "0px";
      // auto resize
      ref.current.style.height = ref.current.scrollHeight + "px";
      // restore style
      ref.current.style.display = preDisplay;
    }, [props.value, ref, props.isFocus]);

    const calcStyle = (s: string, isFocus: boolean, isSelect: boolean) => {
      const clist = ["line"];
      const isList = s.match(/^(\s*)- /);
      if (s.indexOf("# ") === 0) {
        clist.push("h1-style");
      } else if (s.indexOf("## ") === 0) {
        clist.push("h2-style");
      } else if (s.indexOf("### ") === 0) {
        clist.push("h3-style");
      } else if (isList) {
        clist.push("list-style");
        clist.push("list-indent-" + (isList[1].length / 2)); // 2space
      } else if (isBlock(s)) {
        const m = isBlock(s, true);
        clist.push("list-indent-" + ((m?.[1]?.length ?? 0) / 2)); // 2space
      }

      if (isFocus) {
        clist.push("focus");
      }
      if (isSelect) {
        clist.push("select");
      }

      return clist.join(" ");
    };

    const calcTextareaStyle = (isFocus: boolean) => {
      if (isFocus) return [];
      return ["hide"];
    };
    const calcHtmlStyle = (isFocus: boolean) => {
      if (isFocus) return "hide";
      return "";
    };

    // multi-target indexOf
    // return minimum index and target
    const capture = (body: string, targets: string[], offset: number) => {
      let minPos = -1;
      let minTarget = "";
      targets.forEach(function (target) {
        const index = body.indexOf(target, offset);
        if (index !== -1) {
          if (minPos === -1 || minPos > index) {
            minPos = index;
            minTarget = target;
          }
        }
      });
      return { pos: minPos, target: minTarget };
    };

    const linkClickHandler = props.onLinkClick
    const subLinkClickHandler = props.onSubLinkClick
    const makeLine = useCallback((body: string) => {
      let pos = 0;
      const result = [];
      for (;;) {
        const cap = capture(body, ["http://", "https://", " ", "["], pos);
        if ((cap.target === "https://" || cap.target === "http://")) {
          if (pos !== cap.pos) {
            result.push(body.slice(pos, cap.pos));
          }
          const endPos = capture(
            body,
            [" ", "\r", "\n"],
            cap.pos + cap.target.length,
          );
          if (endPos.pos !== -1) {
            const link = body.slice(cap.pos, endPos.pos);
            result.push(<a key={pos} href={link}>{link}</a>);
            pos = endPos.pos;
          } else {
            const link = body.slice(cap.pos, body.length);
            result.push(<a key={pos} href={link}>{link}</a>);
            pos = body.length;
            break;
          }
        } else if (cap.target == " ") {
          result.push(body.slice(pos, cap.pos));
          result.push("\u00A0");
          pos = cap.pos + cap.target.length;
        } else if (cap.target == "["){
          if (pos !== cap.pos) {
            result.push(body.slice(pos, cap.pos));
            pos = cap.pos
          }
          const endPos = capture(body, ["]"], cap.pos + cap.target.length);
          if (endPos.pos !== -1) {
            const value = body.slice(cap.pos, endPos.pos + 1)
            const id = value.slice(1, value.length - 1)
            const k = props.keywords.find((k) => k.value == id)
            console.log("K", id, props.keywords, k)
            let style = " unknown"
            if(k){
              style = " " + k.style
            }
            result.push([<span key={pos}>
              <span className={"braket" + style} onClick={(e) => {
                linkClickHandler(id)
                e.stopPropagation()
              }}><span className="invisible">[</span>{id}<span className="invisible">]</span></span>
              <span className="bracket-icon" onClick={(e) => {
                subLinkClickHandler(id)
                e.stopPropagation()
              }}>[]</span>
            </span>])
            pos = endPos.pos + 1
          } else {
            result.push(body.slice(pos, body.length));
            pos = body.length
          }
        } else {
          result.push(body.slice(pos, body.length));
          pos = body.length;
          break;
        }
      }
      return result;
    }, [linkClickHandler, subLinkClickHandler, props.keywords]);

    const makeBlock = useCallback((type: string | undefined, body: string) => {
      const f = type ? props.blockStyles[type] : undefined;
      if (f) {
        return f(body,setRenderElement)
      } else {
        return (
          <>
            <span className="block-type">{type}</span>
            <pre>
              {body}
            </pre>
          </>
        );
      }
    }, [props.blockStyles]);

    const alignIndent = useCallback((s: string) => {
      const blockMatch = s.match(/^(\s*)```.*/); // ```
      const prefix = blockMatch?.[1] ?? "";
      s = s.slice(prefix.length).split("\n").map((s) => prefix + s).join("\n");
      return s;
    }, []);
    const alignIndentComment = useCallback((s: string) => {
      const blockMatch = s.match(/^(\s*)> /);
      const prefix = blockMatch?.[1] ?? "";
      s = s.slice(prefix.length).split("\n").map((s, i) =>
        prefix + ((i === 0) ? "" : "> ") + s
      ).join("\n");
      return s;
    }, []);

    const makeHtml = useCallback((s: string) => {
      console.log(s)
      if (isBlock(s)) {
        if (isComment(s)) {
          const m = s.match(/\s*> /);
          const body = s.slice(m?.[0]?.length);
          setRenderElement(
            <div>
              <pre className="for-copy">{alignIndentComment(s)}</pre>
              <div className="no-select">{makeBlock("pre", body)}</div>
            </div>
          ); // Comment
          return
        } else {
          const parts = parseBlock(s);
          const block = makeBlock(parts[0], parts[1])
          setRenderElement (
            <div>
              <pre className="for-copy">{alignIndent(s + "\n```")}</pre>
              <div className="no-select">{block}</div>
            </div>
          );
          return
        }
      } else {
        const clist = ["elm"];
        const m = s.match(/^(\s*)-( .*)$/);
        let prefix = null;
        if (s.indexOf("# ") === 0) {
          //clist.push("h1-style");
        } else if (s.indexOf("## ") === 0) {
          //clist.push("h2-style");
        } else if (s.indexOf("### ") === 0) {
          //clist.push("h3-style");
        } else if (m) {
          s = m[2];
          prefix = <pre className="for-copy-inline">{m[1] + "-"}</pre>;
        }
        setRenderElement (
          <div className={clist.join(" ")}>
            {prefix}
            {makeLine(s)}
          </div>
        );
        return
      }
    }, [alignIndent, alignIndentComment, makeBlock, makeLine]);
    
    const elmRef = useRef<HTMLDivElement>(null);
    const mouseLeave =
      (selectThisLine: () => void): React.MouseEventHandler<HTMLDivElement> =>
      (e) => {
        if (e.buttons !== 0 && elmRef.current) {
          selectThisLine();
          const range = new Range();
          range.selectNodeContents(elmRef.current);
          const selection = document.getSelection();
          if (!selection) throw new Error("selection is null");
          selection.empty();
          selection.addRange(range);
        }
      };

    const parts = parsePrefix(props.value);
    const prefix = parts[0];
    const value = parts[1];

    useEffect(() => {
      makeHtml(props.value)
    }, [makeHtml, props.value])

    return isBlock(value)
      ? (
        <div
          className={calcStyle(props.value, props.isFocus, props.isSelect)}
          ref={elmRef}
          data-lineno={props.row}
          onClick={props.onClick}
        >
          <div
            className={["line-item"].concat(calcTextareaStyle(props.isFocus))
              .join(" ")}
            onMouseLeave={mouseLeave(props.selectThisLine)}
          >
            <TextareaWithMenu
              ref={ref}
              value={value}
              keywords={props.keywords}
              setLine={props.setLine(prefix)}
              setCursor={props.setCursor}
              onCompositionStart={props.onCompositionStart}
              onCompositionEnd={props.onCompositionEnd}
              onChange={props.onChange(prefix)}
              popupHandlers={[]}
              onMagicFunc={() => {}}
              onKeyDown={() => props.onKeyDown(prefix, value)}
            />
          </div>
          <div className="line-item">{renderElement}</div>
        </div>
      )
      : (
        <div
          className={calcStyle(props.value, props.isFocus, props.isSelect)}
          ref={elmRef}
          data-lineno={props.row}
          onClick={props.onClick}
        >
          <div
            className={calcTextareaStyle(props.isFocus) + " container"}
            onMouseLeave={mouseLeave(props.selectThisLine)}
          >
            <TextareaWithMenu
              ref={ref}
              value={value}
              keywords={props.keywords}
              setLine={props.setLine(prefix)}
              setCursor={props.setCursor}
              onPaste={props.onPaste(props.row)}
              onCompositionStart={props.onCompositionStart}
              onCompositionEnd={props.onCompositionEnd}
              onChange={props.onChange(prefix)}
              popupHandlers={props.textPopupHandlers}
              onMagicFunc={props.onMagicFunc}
              onKeyDown={(select) => (e) => {
                if (
                  e.key === "Enter" && e.keyCode === 13 &&
                  select.selection !== ""
                ) {
                  e.preventDefault();
                } else {
                  props.onKeyDown(prefix, value)(e);
                }
              }}
            />
          </div>
          <div className={calcHtmlStyle(props.isFocus)}>{renderElement}</div>
        </div>
      );
  },
);
