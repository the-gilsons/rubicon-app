import React from 'react';

var Button = function({data, callback}){
  return (
    <div>
      <button onClick={callback}>{data.text}</button>
    </div>
  )
};

export default Button;
