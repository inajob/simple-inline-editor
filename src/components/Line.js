import React, { useRef, useEffect } from 'react';

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
    if(s.indexOf("# ") === 0){
      clist.push("h1-style");
    }else if(s.indexOf("## ") === 0){
      clist.push("h2-style");
    }else if(s.indexOf("### ") === 0){
      clist.push("h3-style");
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
      cap = capture(body, ["http://", "https://"], pos);
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
      }else{
        result.push(body.slice(pos, body.length))
        pos = body.length;
        break;
      }
    }
    return result
  }
  const makeHtml = (s) => {
    let clist = ["elm"];
    if(s.indexOf("# ") === 0){
      //clist.push("h1-style");
    }else if(s.indexOf("## ") === 0){
      //clist.push("h2-style");
    }else if(s.indexOf("### ") === 0){
      //clist.push("h3-style");
    }
    return (
      <div className={clist.join(" ")}>
        {makeLine(s)}
      </div>
    )
  }

  return (
    <div
      className={calcStyle(props.value, props.isFocus)}
      onClick={props.onClick}
    >
       <textarea
         className={calcTextareaStyle(props.isFocus)}
         ref={ref}
         value={props.value}
         onChange={props.onChange}
         onKeyDown={props.onKeyDown}
      />
      <div className={calcHtmlStyle(props.isFocus)}>{makeHtml(props.value)}</div>
    </div>
  );
};

export default Line
