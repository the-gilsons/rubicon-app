import React from 'react';
import Input from './input';
import FileParser from './fileParser';
import Button from './button';

var Home = function({canSubmit, addEmail, addPassword, addTemplateId, addTemplateName, addFileData, postMailerInfo}){
  let disableButton = !canSubmit;
  return (
    <div className="container">
      <h3 className="title">Team Rubicon DocuSign Mailer</h3>
      <form>
        <div className="form-group">
          <Input data={{title: 'DocuSign Email', type:'email'}} callback={addEmail}/>
        </div>
        <div className="form-group">
          <Input data={{title: 'DocuSign Password', type:'password'}} callback={addPassword}/>
        </div>
        <div className="form-group">
          <Input data={{title: 'DocuSign Template ID', type:'text'}} callback={addTemplateId}/>
        </div>
        <div className="form-group">
          <Input data={{title: 'DocuSign Template Name', type:'text'}} callback={addTemplateName}/>
        </div>
        <div className="form-group">
          <FileParser addFileData={addFileData}/>
        </div>
        <Button callback={postMailerInfo} data={{text: 'Submit', disable: disableButton}}/>
      </form>
    </div>
  )
};

export default Home;
