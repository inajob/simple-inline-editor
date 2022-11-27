import React, { useRef, useEffect } from 'react';
import {isBlock} from '../utils/util'

export const Line = (props) => {
  const ref = useRef();
  useEffect(() =>{
    if (props.isFocus) {
      ref.current?.focus?.();
      ref.current?.setSelectionRange(props.column, props.column);
    }
  } ,[props.isFocus, props.column]);

  const calcStyle = (s, isFocus) => {
    let clist = ["line"];
    let m = s.match(/^(\s*)- /);
    if(s.indexOf("# ") === 0){
      clist.push("h1-style");
    }else if(s.indexOf("## ") === 0){
      clist.push("h2-style");
    }else if(s.indexOf("### ") === 0){
      clist.push("h3-style");
    }else if(m){
      clist.push("list-style");
      clist.push("list-indent-" + (m[1].length/2)) // 2space
    }

    if(isFocus){
      clist.push("focus");
    }

    return clist.join(" ");
  }

  const calcTextareaStyle = (isFocus) => {
    if(isFocus)return "";
    return "hide";
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

  const makeLine = (body) => {
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
  }

  const makeHtml = (s) => {
    if(isBlock(s)){
      return (
        <pre className="block">
          {s}
        </pre>
      )
    }else{
      let clist = ["elm"];
      let m = s.match(/^(\s*)-( .*)$/);
      if(s.indexOf("# ") === 0){
        //clist.push("h1-style");
      }else if(s.indexOf("## ") === 0){
        //clist.push("h2-style");
      }else if(s.indexOf("### ") === 0){
        //clist.push("h3-style");
      }else if(m){
        s = m[2]
      }
      return (
        <div className={clist.join(" ")}>
          {makeLine(s)}
        </div>
      )
    }
  }
  const makeText = (s) => {
    let m = s.match(/^(\s*)-( .*)$/);
    let prefix = "";
    if(m){
      s = m[2]
      prefix = m[1] + "-"
    }
    return [prefix, s]
  }

  let parts = makeText(props.value);
  let prefix = parts[0];
  let value = parts[1];

  const calcHeight = (s) => {
    let lineNo = s.split(/[\r\n]/).length
    return "calc(" + lineNo + "* 1.5em)"; // same as height
  }

  return (
    <div
      className={calcStyle(props.value, props.isFocus)}
      onClick={props.onClick}
    >
       <textarea
         className={calcTextareaStyle(props.isFocus)}
         style={{height: calcHeight(value)}}
         ref={ref}
         value={value}
         onChange={props.onChange(prefix)}
         onKeyDown={props.onKeyDown(prefix, value)}
      />
      <div className={calcHtmlStyle(props.isFocus)}>{makeHtml(props.value)}</div>
    </div>
  );
};

export default Line
