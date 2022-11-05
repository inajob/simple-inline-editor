import React, { useRef, useEffect } from 'react';

export const Line = (props) => {
  const ref = useRef();
  useEffect(() =>{
    if (props.isFocus) {
      ref.current?.focus?.();
    }
  } ,[props.isFocus]);

  return (
    <textarea
       ref={ref}
       value={props.value}
       onChange={props.onChange}
       onKeyDown={props.onKeyDown}
       onClick={props.onClick}
    />
  );
};

export default Line
