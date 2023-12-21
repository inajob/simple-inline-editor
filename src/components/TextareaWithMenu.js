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

  const getTextInBracket = (pre, post) => {
    let nest = 0
    let text = ""
    let closed = false
    for(let i = 0; i < pre.length; i ++){
      const c = pre[i]
      if(c === "["){
        nest ++;
        text = ""
      }else if(c === "]"){
        if(nest > 0){
          nest --;
          text = ""
          closed = true
        }
        if(nest === 0){
          closed = false
        }
      }else{
        if(nest > 0 && !closed){
          text += c
        }
      }
    }
    let postText = ""
    if(nest > 0){
      let postNest = 0
      let closed = false
      for(let i = 0; i < post.length; i ++){
        const c = post[i]
        if(c === "["){
          postNest ++;
        }else if(c === "]"){
          postNest --;
          closed = true
        }else{
          if(!closed){
            postText += c
          }
        }
      }
      if(postNest === 0){postText = ""}

      return text + postText
    }
    return ""
  }

  useEffect(() =>{
    menuPosRef.current.style.display = "inline"

    let candidate = getTextInBracket(select.prefix, select.suffix)
    if(select.selection === "" && candidate === ""){
      menuRef.current.style.display = "none"
    }else{
      menuRef.current.style.display = "inline"
    }

    menuRef.current.style.left = menuPosRef.current.getBoundingClientRect().width + "px"
    menuRef.current.style.top = (-menuRef.current.getBoundingClientRect().height) + "px"
    menuPosRef.current.style.display = "none"

  } ,[select]);

  const inlineSelect = function(e){
    setSelect({
      "prefix": e.target.value.slice(0, e.target.selectionStart),
      "selection": e.target.value.slice(e.target.selectionStart, e.target.selectionEnd),
      "suffix": e.target.value.slice(e.target.selectionEnd)
    })
  }

  let popupHandlers = props.popupHandlers
  let selectedKeyword = ""
  let candidate = getTextInBracket(select.prefix, select.suffix)
  if(select.selection === "" && candidate !== ""){
    // TODO: filter keywords list
    console.log(candidate)
    popupHandlers = props.keywords.filter((k) => {return k.indexOf(candidate) != -1}).map((k) => {return {name: k, handler: ()=>{}}})
    if(popupHandlers.length > 0){
      selectedKeyword = popupHandlers[0].name
    }
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
        onKeyDown={(e) => {
          if(e.key === "Enter" && e.keyCode === 13 && selectedKeyword !== ""){
            // TODO: complete keyword
            const before = select.prefix.slice(0, -candidate.length)
            let after = select.suffix
            let col = (before + selectedKeyword).length
            if(after.length == 0 || after[0] != "]"){
              after = "]" + after
              col += 1
            }
            props.setLine(before + selectedKeyword + after);
            props.setCursor(col)
            e.preventDefault();
          }else{
            props.onKeyDown(select)(e)
          }
        }}
        onSelect={inlineSelect}
      />
      <div className="popup" ref={menuRef}>
        {popupHandlers.map((item, i) =>
        <div
          key={i}
          onClick={() => {
            const change = item.handler(select)
            if(change){
              props.onChange(change)
            }
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
