import React from 'react';

var Input = function({data, callback}){
  return(
    <div>
      <label htmlFor={data.title}>{data.title}</label>
      <input type={data.type} id={data.title} onChange={callback(this)}/>
    </div>
  )
}

export default Input;
