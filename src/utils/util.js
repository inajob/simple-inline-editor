export const isBlock = (s) => {
  if(s.indexOf('```') === 0){
    return true
  }
  return false
}
export const getLines = (text) => {
  var list = text.split(/[\r\n]/);
  return list;
}
export const numLines = (s) => {
  return s.split(/[\r\n]/).length
}

// sのindex番目がx,yで何番目か調べる
export const getCursorPos = (index, text) => {
  var list = text.split(/[\r\n]/);
  var pos = 0;
  var i;
  for(i = 0; i < list.length; i ++){
    pos += list[i].length + 1;
    if(pos > index){
      // X, Y
      return [index - (pos - list[i].length - 1), i]
    }
  }
  console.log("error getPos")
}

export const isLastLine = (index, text) => {
  let pos = getCursorPos(index, text)
  let n = numLines(text)
  return pos[1] === n -1
}

export const isFirstLine = (index, text) => {
  let pos = getCursorPos(index, text)
  return pos[1] === 0
}
