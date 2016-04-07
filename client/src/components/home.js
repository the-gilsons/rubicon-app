import React from 'react';
import Input from './input';
import FileParser from './fileParser';
import Button from './button';

export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  handlePost(e){
    e.preventDefault;
    this.props.postMailerInfo({
      emailList: this.props.data.fileInfo,
      docuSignEmail: this.refs.dsEmail.value,
      docuSignPass: this.refs.dsPassword.value,
      templateInfo: {
        id: this.refs.dsTempId.value,
        role: this.refs.dsTempName
      }
    });
  }

  render(){
    //let disableButton = !this.props.data.canSubmit;
    return (
      <div className="container">
      <h3 className="title">Team Rubicon DocuSign Mailer</h3>
      <form>
      <div className="form-group">
      <Input data={{title: 'DocuSign Email', ref: 'dsEmail', type:'email'}} callback={this.props.addEmail}/>
      </div>
      <div className="form-group">
      <Input data={{title: 'DocuSign Password', ref: 'dsPassword', type:'password'}} callback={this.props.addPassword}/>
      </div>
      <div className="form-group">
      <Input data={{title: 'DocuSign Template ID', ref: 'dsTempId', type:'text'}} callback={this.props.addTemplateId}/>
      </div>
      <div className="form-group">
      <Input data={{title: 'DocuSign Template Name', ref: 'dsTempName', type:'text'}} callback={this.props.addTemplateName}/>
      </div>
      <div className="form-group">
      <FileParser addFileData={this.props.addFileData}/>
      </div>
      <Button callback={this.handlePost} data={{text: 'Submit' }}/>
      </form>
      </div>
    )
  }
};

export default Home;
