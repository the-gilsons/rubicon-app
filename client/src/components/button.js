import React from 'react';

export default class Button extends React.Component{
  constructor(props){
    super(props)
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.callback();
  }

  render(){
    return (
      <div>
        <button className="btn btn-danger" 
        onClick={this.handleSubmit.bind(this)}>
        {this.props.data.text}
        </button>
      </div>
    )
  }
};

export default Button;
