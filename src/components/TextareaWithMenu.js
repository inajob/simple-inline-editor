import React, {useEffect, useRef, useState} from 'react';
export const TextareaWithMenu = React.forwardRef((props, ref) => {

  const [select, setSelect] = useState({
    prefix: "",
    selection: "",
    suffix: "",
  });
  const clearSelect = () => {
    setSelect({ prefix: "", selection: "", suffix: "" })
  }

  useEffect(() =>{
    menuPosRef.current.style.display = "inline"

    menuRef.current.style.left = menuPosRef.current.getBoundingClientRect().width + "px"
    menuRef.current.style.top = menuPosRef.current.getBoundingClientRect().height + "px"
    menuPosRef.current.style.display = "none"

    if(select.selection === ""){
      menuRef.current.style.display = "none"
    }else{
      menuRef.current.style.display = "inline"
    }
  } ,[select]);

  const inlineSelect = function(e){
    setSelect({
      "prefix": e.target.value.slice(0, e.target.selectionStart),
      "selection": e.target.value.slice(e.target.selectionStart, e.target.selectionEnd),
      "suffix": e.target.value.slice(e.target.selectionEnd)
    })
  }

  const menuPosRef = useRef();
  const menuRef = useRef();

  return (
    <div className={props.className + " container"} style={{position:"relative"}}>
      <textarea
        ref={ref}
        value={props.value}
        onPaste={props.onPaste}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown(select)}
        onSelect={inlineSelect}
      />
      <div className="popup" ref={menuRef}>
        {props.popupHandlers.map((item, i) =>
        <div
          key={i}
          onClick={() => {
            item.handler(select)
            clearSelect()
          }}
        >{item.name}</div>
        )}
      </div>
      <span className="menu-pos" style={{display:"none"}} ref={menuPosRef}>{select.prefix.replace(" ", "\u00a0")}</span>
    </div>
  )
})

export default TextareaWithMenu
