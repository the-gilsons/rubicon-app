import React from 'react';
import _ from 'lodash';

export default class Input extends React.Component{
  constructor(props){
    super(props)
  }

  handleInput(e){
    this.props.callback(e.target.value);
  }

  render(){
    return(
      <fieldset className="form-group">
        <label htmlFor={this.props.data.title}>
        {this.props.data.title}
        </label>
        <input type={this.props.data.type} 
        id={this.props.data.title} 
        ref={this.props.data.ref} 
        onBlur={this.handleInput.bind(this)}
        className="form-control"/>
      </fieldset>
    )
  }
}
