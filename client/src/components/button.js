import React from 'react';

var Button = function({data, callback}){
  return (
    <div>
      <button onClick={callback} disabled={data.disable}>{data.text}</button>
    </div>
  )
};

export default Button;
