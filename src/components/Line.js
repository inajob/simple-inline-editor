import React, { useEffect, useMemo, useCallback } from 'react';
import {isBlock, parseBlock, getLines} from '../utils/util'

export const Line = React.forwardRef((props, ref) => {
  useEffect(() =>{
    // save style
    let preDisplay = ref.current.style.display
    // reset style for calculation
    ref.current.style.display = "block"
    ref.current.style.height = "0px"
    // auto resize
    ref.current.style.height = ref.current.scrollHeight + "px"
    // restore style
    ref.current.style.display = preDisplay
  } ,[props.value, ref]);


  const calcStyle = (s, isFocus, isSelect) => {
    let clist = ["line"];
    let isList = s.match(/^(\s*)- /);
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
      let m = isBlock(s, true)
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
    var minPos = -1;
    var minTarget = "";
    targets.forEach(function(target){
      var index = body.indexOf(target, offset);
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
    var pos = 0;
    var result = []
    while(true){
      var cap;
      cap = capture(body, ["http://", "https://", " "], pos);
      if((cap.target === "https://" || cap.target === "http://")){
        if(pos !== cap.pos){
          result.push(body.slice(pos, cap.pos));
        }
        var endPos = capture(body, [" ","\r", "\n"], cap.pos + cap.target.length);
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

  const csvToTable = (body) => {
    let rows = []
    console.log(body)
    let lines = getLines(body)
    lines.forEach((l, tri) => {
      let cellElms = []
      let cells = l.split(/\s*,\s*/)
      cells.forEach((cell, tdi) => {
        cellElms.push(<td key={tdi}>{cell}</td>)
      })
      rows.push(<tr key={tri}>{cellElms}</tr>)
    })
    return (
      <table>{rows}</table>
    )
  }

  const makeBlock = useCallback((type, body) => {
    switch(type){
      case "table":
        return csvToTable(body)
      default:
        return (
          <pre>
            {body}
          </pre>
        )
    }
  }, [])

  const alignIndent = useCallback((s) => {
    let blockMatch = s.match(/^(\s*)(```.*)/) // ```
    let prefix = blockMatch[1]
    s = s.slice(prefix.length).split("\n").map((s) => prefix + s).join("\n")
    return s
  }, [])

  const makeHtml = useCallback(((s) => {
    if(isBlock(s)){
      let parts = parseBlock(s)
      return (
        <div>
        <pre className="for-copy">{alignIndent(s + "\n```")}</pre>
        <div className="no-select">{makeBlock(parts[0], parts[1])}</div>
        </div>
      ) // ```
    }else{
      let clist = ["elm"];
      let m = s.match(/^(\s*)-( .*)$/);
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
  }), [alignIndent, makeBlock, makeLine])
  const makeText = (s) => {
    let listMatch = s.match(/^(\s*-)( .*)$/);
    let prefix = "";
    if(listMatch){
      s = listMatch[2]
      prefix = listMatch[1]
    }else{
      let blockMatch = s.match(/^(\s*)(```.*)/) // ```
      if(blockMatch){
        prefix = blockMatch[1]
        s = s.slice(blockMatch[1].length)
      }
    }
    return [prefix, s]
  }

  let parts = makeText(props.value);
  let prefix = parts[0];
  let value = parts[1];

  let elm;
  let renderElement = useMemo(() => makeHtml(props.value), [props.value, makeHtml])
  if(isBlock(value)){
    elm = (
      <div
        className={calcStyle(props.value, props.isFocus, props.isSelect)}
        data-lineno={props.row}
        onClick={props.onClick}
      >
        <textarea
          className={["line-item"].concat(calcTextareaStyle(props.isFocus)).join(" ")}
          ref={ref}
          value={value}
          onChange={props.onChange(prefix)}
          onKeyDown={props.onKeyDown(prefix, value)}
        />
        <div className="line-item">{renderElement}</div>
      </div>
    )
  }else{
    elm = (
      <div
        className={calcStyle(props.value, props.isFocus, props.isSelect)}
        data-lineno={props.row}
        onClick={props.onClick}
      >
        <textarea
          className={calcTextareaStyle(props.isFocus)}
          ref={ref}
          value={value}
          onPaste={props.onPaste(props.row)}
          onChange={props.onChange(prefix)}
          onKeyDown={props.onKeyDown(prefix, value)}
        />
        <div className={calcHtmlStyle(props.isFocus)}>{renderElement}</div>
      </div>
    );
  }

  return elm;
});

export default Line
