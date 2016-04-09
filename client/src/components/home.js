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
    let disableButton = !this.props.data.canSubmit;
    let message = this.props.data.errorMsg !== '' ? this.props.data.errorMsg : '';

    return (
      <div className="container">
        <form className="form-control-static">

          <Input data={{title: 'DocuSign Email',
          ref: 'dsEmail',
          type:'email'}}
          callback={this.props.addEmail}/>


            <Input data={{title: 'DocuSign Password',
            ref: 'dsPassword',
            type:'password'}}
            callback={this.props.addPassword}/>

            <Input data={{title: 'DocuSign Template ID',
            ref: 'dsTempId',
            type:'text'}}
            callback={this.props.addTemplateId}/>

            <Input data={{title: 'DocuSign Template Name',
            ref: 'dsTempName',
            type:'text'}}
            callback={this.props.addTemplateName}/>


          <FileParser addFileData={this.props.addFileData} addFileName={this.props.addFileName} fileName={this.props.data.fileName}/>

          <Button callback={this.handlePost.bind(this)}
          data={{text: 'Send Emails', isDisabled: !this.props.data.canSubmit }}/>

          {message ? (<div className="alert alert-danger" role="alert"><strong>{message}</strong></div>) : (<div></div>)}
        </form>
      </div>
    )
  }
};

export default Home;
