import React from 'react';

export default class Input extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <label htmlFor={this.props.data.title}>{this.props.data.title}</label>
        <input type={this.props.data.type} id={this.props.data.title} ref={this.props.data.ref}/>
      </div>
    )
  }
}
