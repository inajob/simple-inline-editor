export const isBlock = (s, isMatch) => {
  const m = s.match(/^(\s*)```/) //```
  if(isMatch){
    return m
  }
  if(m != null){
    return true
  }
  return false
}
export const getLines = (text) => {
  const list = text.split(/[\r\n]/);
  return list;
}
export const numLines = (s) => {
  return s.split(/[\r\n]/).length
}

// sのindex番目がx,yで何番目か調べる
export const getCursorPos = (index, text) => {
  const list = text.split(/[\r\n]/);
  let pos = 0;
  for(let i = 0; i < list.length; i ++){
    pos += list[i].length + 1;
    if(pos > index){
      // X, Y
      return [index - (pos - list[i].length - 1), i]
    }
  }
  console.log("error getPos")
}

export const isLastLine = (index, text) => {
  const pos = getCursorPos(index, text)
  const n = numLines(text)
  return pos[1] === n -1
}

export const isFirstLine = (index, text) => {
  const pos = getCursorPos(index, text)
  return pos[1] === 0
}

export const parseBlock = (text) => {
  const m = text.match(/^\s*`{3}(.*)/) //`
  const blockBody = getLines(text).slice(1).join("\n")
  const blockType = m[1]
  return [blockType, blockBody]
}
