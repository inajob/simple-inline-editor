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
          value={line}
          onChange={(e) => ((i) => {
            setLines((prev) => {
              prev[i] = e.target.value;
              return [...prev];
            })
          })(index)}
          onKeyDown={(e) => setCursor((prev) => {
            switch(e.key) {
              case "ArrowUp":
                return { row: prev.row - 1, col: prev.col };
              case "ArrowDown":
                return { row: prev.row + 1, col: prev.col };
              default:
                // 同じobjectを返せば再レンダリングされない
                return prev;
            }
          })}
        />
      ))}
    </div>);
};

export default Editor
