import React, { useState } from 'react';
import Line from './Line';
import {isBlock, isFirstLine, isLastLine} from '../utils/util'

export const Editor = (props) => {
  const [cursor, setCursor] = useState({
    row: 0,
    col: 0,
  });
  const [lines, setLines] = useState(props.lines);

  return (
    <div className="editor">
      {lines.map((line, index) => (
        <Line
          key={index}
          isFocus={index === cursor.row}
          column={cursor.col}
          value={line}
          onChange={(prefix) => (e) => ((i) => {
            setLines((prev) => {
              prev[i] = prefix + e.target.value;
              return [...prev];
            })
          })(index)}
          onKeyDown={(prefix, line) => (e) => {
            setCursor((prev) => {
              switch(e.key) {
                case "ArrowLeft":
                  if(e.target.selectionStart === 0 && e.target.selectionEnd === 0){
                    if(prev.row === 0)return prev;
                    let nextCol = lines[cursor.row - 1].length
                    e.preventDefault();
                    return { row: prev.row - 1, col: nextCol };
                  }
                  return prev
                case "ArrowRight":
                  let maxCol = - prefix.length + lines[cursor.row].length
                  if(e.target.selectionStart === maxCol && e.target.selectionEnd === maxCol){
                    if(prev.row === lines.length - 1)return prev;
                    e.preventDefault();
                    return { row: prev.row + 1, col: 0 };
                  }
                  return prev
                case "ArrowUp":
                  if(isBlock(line) && !isFirstLine(e.target.selectionStart, line)){
                    return prev
                  }else{
                    if(prev.row === 0)return prev;
                    return { row: prev.row - 1, col: prev.col };
                  }
                case "ArrowDown":
                  if(isBlock(line) && !isLastLine(e.target.selectionStart, line)){
                    return prev
                  }else{
                    if(prev.row === lines.length - 1)return prev;
                    e.preventDefault();
                    return { row: prev.row + 1, col: prev.col };
                  }
                case "Backspace":
                  if(e.target.selectionStart === 0 && e.target.selectionEnd === 0){
                    if(prev.row === 0)return prev;
                    let nextCol = lines[cursor.row - 1].length
                    setLines((prevLines) => {
                      // 上の行と結合する
                      prevLines[prev.row - 1] += prevLines[prev.row];
                      prevLines.splice(prev.row, 1);
                      return [...prevLines];
                    });
                    e.preventDefault();
                    return { row: prev.row - 1, col: nextCol};
                  }
                  return prev;
                case "Tab":
                  setLines((prevLines) => {
                    if(e.shiftKey){
                      if(prefix.length === 1){ // prefix == '-'
                        prevLines[prev.row] = e.target.value.slice(1);
                      }else if(prefix.length > 0){
                        prevLines[prev.row] = prefix.slice(2) + e.target.value;
                      }
                    }else{
                      if(prefix.length === 0){
                        prevLines[prev.row] = "- " + e.target.value;
                      }else{
                        prevLines[prev.row] = "  "+ prefix + e.target.value;
                      }
                    }
                    return [...prevLines];
                  })
                  e.preventDefault();
                  return prev;
                case "Enter":
                  if(isBlock(line)){
                    return prev;
                  }else{
                    setLines((prevLines) => {
                      const column = prefix.length + e.target.selectionStart;
                      const afterCursor = prevLines[prev.row].slice(column);
                      prevLines[prev.row] = prevLines[prev.row].slice(0, column);
                      if(prefix.length !== 0){
                        prevLines.splice(prev.row + 1, 0, prefix + " " + afterCursor);
                      }else{
                        prevLines.splice(prev.row + 1, 0, afterCursor);
                      }
                      return [...prevLines];
                    });
                    e.preventDefault();
                    return { row: prev.row + 1, col: prefix.length };
                  }
                default:
                  // 同じobjectを返せば再レンダリングされない
                  return prev;
              }
            })
          }}
          onClick={(e) => {
            setCursor((prev) => {
              return {row: index, col: prev.col};
            })
          }}
        />
      ))}
    </div>);
};

export default Editor
