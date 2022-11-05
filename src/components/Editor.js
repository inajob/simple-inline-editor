import React, { useState } from 'react';
import Line from './Line';

export const Editor = (props) => {
  const [cursor, setCursor] = useState({
    row: 0,
    col: 0,
  });
  const [lines, setLines] = useState(props.lines);

  return (
    <div>
      {lines.map((line, index) => (
        <Line
          key={index}
          isFocus={index === cursor.row}
          column={cursor.col}
          value={line}
          onChange={(e) => ((i) => {
            setLines((prev) => {
              prev[i] = e.target.value;
              return [...prev];
            })
          })(index)}
          onKeyDown={(e) => {
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
                  let maxCol = lines[cursor.row].length
                  if(e.target.selectionStart === maxCol && e.target.selectionEnd === maxCol){
                    if(prev.row === lines.length - 1)return prev;
                    e.preventDefault();
                    return { row: prev.row + 1, col: 0 };
                  }
                  return prev
                case "ArrowUp":
                  if(prev.row === 0)return prev;
                  return { row: prev.row - 1, col: prev.col };
                case "ArrowDown":
                  if(prev.row === lines.length - 1)return prev;
                  return { row: prev.row + 1, col: prev.col };
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
                case "Enter":
                  setLines((prevLines) => {
                    const column = e.target.selectionStart;
                    const afterCursor = prevLines[prev.row].slice(column);
                    prevLines[prev.row] = prevLines[prev.row].slice(0, column);
                    prevLines.splice(prev.row + 1, 0, afterCursor);
                    return [...prevLines];
                  });
                  e.preventDefault();
                  return { row: prev.row + 1, col: 0 };
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
