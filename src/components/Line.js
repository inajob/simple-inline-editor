import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import {isBlock, parseBlock, isComment} from '../utils/util'
import TextareaWithMenu from './TextareaWithMenu';

export const Line = React.forwardRef((props, ref) => {
  useEffect(() =>{
    // save style
    const preDisplay = ref.current.style.display
    // reset style for calculation
    ref.current.style.display = "block"
    ref.current.style.height = "0px"
    // auto resize
    ref.current.style.height = ref.current.scrollHeight + "px"
    // restore style
    ref.current.style.display = preDisplay
  } ,[props.value, ref]);

  const calcStyle = (s, isFocus, isSelect) => {
    const clist = ["line"];
    const isList = s.match(/^(\s*)- /);
    if(s.indexOf("# ") === 0){
      clist.push("h1-style");
    }else if(s.indexOf("## ") === 0){
      clist.push("h2-style");
    }else if(s.indexOf("### ") === 0){
      clist.push("h3-style");
    }else if(isList){
      clist.push("list-style");
      clist.push("list-indent-" + (isList[1].length/2)) // 2space
    }else if(isBlock(s)){
      const m = isBlock(s, true)
      clist.push("list-indent-" + (m[1].length/2)) // 2space
    }

    if(isFocus){
      clist.push("focus");
    }
    if(isSelect){
      clist.push("select");
    }

    return clist.join(" ");
  }

  const calcTextareaStyle = (isFocus) => {
    if(isFocus)return [];
    return ["hide"];
  }
  const calcHtmlStyle = (isFocus) => {
    if(isFocus)return "hide";
    return "";
  }

  // multi-target indexOf
  // return minimum index and target
  const capture = (body, targets, offset) => {
    let minPos = -1;
    let minTarget = "";
    targets.forEach(function(target){
      let index = body.indexOf(target, offset);
      if(index !== -1){
        if(minPos === -1 || minPos > index){
          minPos = index;
          minTarget = target;
        }
      }
    });
    return {pos: minPos, target: minTarget}
  }

  const makeLine = useCallback((body) => {
    let pos = 0;
    const result = []
    while(true){
      let cap;
      cap = capture(body, ["http://", "https://", " "], pos);
      if((cap.target === "https://" || cap.target === "http://")){
        if(pos !== cap.pos){
          result.push(body.slice(pos, cap.pos));
        }
        let endPos = capture(body, [" ","\r", "\n"], cap.pos + cap.target.length);
        if(endPos.pos !== -1){
          let link = body.slice(cap.pos, endPos.pos)
          result.push(<a href={link}>{link}</a>);
          pos = endPos.pos;
        }else{
          let link = body.slice(cap.pos, body.length);
          result.push(<a href={link}>{link}</a>);
          pos = body.length;
          break;
        }
      }else if(cap.target===" "){
        result.push(body.slice(pos, cap.pos));
        result.push("\u00A0")
        pos = cap.pos + cap.target.length;
      }else{
        result.push(body.slice(pos, body.length))
        pos = body.length;
        break;
      }
    }
    return result
  }, [])

  const makeBlock = useCallback((type, body) => {
    const f = props.blockStyles[type]
    if(f){
      return f(body)
    }else{
        return (
          <pre>
            {body}
          </pre>
        )
    }
  }, [props.blockStyles])

  const alignIndent = useCallback((s) => {
    const blockMatch = s.match(/^(\s*)```.*/) // ```
    const prefix = blockMatch[1]
    s = s.slice(prefix.length).split("\n").map((s) => prefix + s).join("\n")
    return s
  }, [])
  const alignIndentComment = useCallback((s) => {
    const blockMatch = s.match(/^(\s*)> /)
    const prefix = blockMatch[1]
    s = s.slice(prefix.length).split("\n").map((s, i) => prefix + ((i===0)?"":"> ") + s).join("\n")
    return s
  }, [])


  const makeHtml = useCallback(((s) => {
    if(isBlock(s)){
      if(isComment(s)){
        const m = s.match(/\s*> /)
        const body = s.slice(m[0].length)
        return (
          <div>
          <pre className="for-copy">{alignIndentComment(s)}</pre>
          <div className="no-select">{makeBlock("pre", body)}</div>
          </div>
        ) // Comment
      }else{
        let parts = parseBlock(s)
        return (
          <div>
          <pre className="for-copy">{alignIndent(s + "\n```")}</pre>
          <div className="no-select">{makeBlock(parts[0], parts[1])}</div>
          </div>
        ) // ```
      }
    }else{
      const clist = ["elm"];
      const m = s.match(/^(\s*)-( .*)$/);
      let prefix = null;
      if(s.indexOf("# ") === 0){
        //clist.push("h1-style");
      }else if(s.indexOf("## ") === 0){
        //clist.push("h2-style");
      }else if(s.indexOf("### ") === 0){
        //clist.push("h3-style");
      }else if(m){
        s = m[2]
        prefix = <pre className="for-copy-inline">{m[1] + "-"}</pre>
      }
      return (
        <div className={clist.join(" ")}>
          {prefix}{makeLine(s)}
        </div>
      )
    }
  }), [alignIndent, alignIndentComment, makeBlock, makeLine])
  const makeText = (s) => {
    const listMatch = s.match(/^(\s*-)( .*)$/);
    let prefix = "";
    if(listMatch){
      s = listMatch[2]
      prefix = listMatch[1]
    }else{
      let blockMatch = s.match(/^(\s*)(```.*|> )/) // ```
      if(blockMatch){
        prefix = blockMatch[1]
        s = s.slice(blockMatch[1].length)
      }
    }
    return [prefix, s]
  }

  const elmRef = useRef();
  const mouseLeave = (selectThisLine) => (e) => {
    if(e.buttons !== 0){
      selectThisLine()
      const range = new Range();
      range.selectNodeContents(elmRef.current)
      document.getSelection().empty()
      document.getSelection().addRange(range)
    }
  }

  const parts = makeText(props.value);
  const prefix = parts[0];
  const value = parts[1];

  let elm;
  const renderElement = useMemo(() => makeHtml(props.value), [props.value, makeHtml])
  if(isBlock(value)){
    elm = (
      <div
        className={calcStyle(props.value, props.isFocus, props.isSelect)}
        ref={elmRef}
        data-lineno={props.row}
        onClick={props.onClick}
      >
        <div
          className={["line-item"].concat(calcTextareaStyle(props.isFocus)).join(" ")}
          onMouseLeave={mouseLeave(props.selectThisLine)}
        >
          <TextareaWithMenu
            ref={ref}
            value={value}
            keywords={props.keywords}
            onCompositionStart={props.onCompositionStart}
            onCompositionEnd={props.onCompositionEnd}
            onChange={props.onChange(prefix)}
            popupHandlers={[]}
            onKeyDown={(select) => props.onKeyDown(prefix, value)}
          />
        </div>
        <div className="line-item">{renderElement}</div>
      </div>
    )
  }else{
    elm = (
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
            onKeyDown={(select) => (e) => {
              if(e.key === "Enter" && e.keyCode === 13 && select.selection !== ""){
                e.preventDefault();
              }else{
                props.onKeyDown(prefix, value)(e)
              }
            }}
          />
        </div>
        <div className={calcHtmlStyle(props.isFocus)}>{renderElement}</div>
      </div>
    );
  }

  return elm;
});

export default Line
