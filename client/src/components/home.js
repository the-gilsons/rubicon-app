import React from 'react';
import Input from './input';
import FileParser from './fileParser';
import Button from './button';

export default class Home extends React.Component{
  constructor(props){
    super(props)
  }

  handlePost(){
    this.props.postMailerInfo({
      emailList: this.props.data.fileInfo,
      docuSignEmail: this.props.data.docuSignEmail,
      docuSignPass: this.props.data.docuSignPassword,
      templateInfo: {
        id: this.props.data.templateID,
        role: this.props.data.templateName
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
      <Button callback={this.handlePost.bind(this)} data={{text: 'Send Emails' }}/>
      </form>
      </div>
    )
  }
};

export default Home;
