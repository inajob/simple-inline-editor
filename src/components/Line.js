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
    let clist = [];
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

  return (
    <div className={calcStyle(props.value, props.isFocus)}><textarea
         ref={ref}
         value={props.value}
         onChange={props.onChange}
         onKeyDown={props.onKeyDown}
         onClick={props.onClick}
      /></div>
  );
};

export default Line
