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

  const [popup, setPopup] = useState({
    index: 0,
  });

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

  const extractBefore = (s) => {
    let l = s.length - 1
    for(let i = s.length - 1; i >= 0; i --){
      if(s[i] === "["){
        l = i
        break
      }
    }
    return s.slice(0, -(s.length - 1 - l))
  }
  const extractAfter = (s) => {
    let l = 0
    for(let i = 0; i < s.length; i ++){
      if(s[i] === "]"){
        l = i
        break
      }
    }
    return s.slice(l)
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

  useEffect(() =>{
    setPopup({index: 0})
  },[props.value]);

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
    popupHandlers = props.keywords.filter((k) => {return k.indexOf(candidate) != -1}).map((k, i) => {
      return {
        name: k,
        handler: ()=>{
          const before = extractBefore(select.prefix)
          const k = popupHandlers[i].name
          let after = extractAfter(select.suffix)
          let col = (before + k).length
          if(after.length == 0 || after[0] != "]"){
            after = "]" + after
            col += 1
          }
          props.setLine(before + k + after);
          props.setCursor(col)
        }
      }
    })
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
        onCompositionStart={props.onCompositionStart}
        onCompositionEnd={props.onCompositionEnd}
        onChange={props.onChange}
        onKeyDown={(e) => {
          if(e.key === "Enter" && e.keyCode === 13 && selectedKeyword !== ""){
            popupHandlers[popup.index].handler()
            e.preventDefault();
          }else if(e.key == "Tab" && selectedKeyword !== ""){
            setPopup((prev) => {
              let i = prev.index + 1
              if(i >= popupHandlers.length){
                i = 0
              }
              return {index: i}
            })
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
          className={popup.index == i?"selected":""}
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
