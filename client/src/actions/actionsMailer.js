require('isomorphic-fetch');
import * as actions from './actionsConstants';

export function addDocuSignEmail(email){
  return {
    type: actions.DS_EMAIL,
    email
  }
}

export function addDocuSignPassword(password){
  return {
    type: actions.DS_PASSWORD,
    password
  }
}

export function addDocuSignTempID(id){
  return {
    type: actions.DS_TEMPLATE_ID,
    id
  }
}

export function addDocuSignTempName(templateName){
  return {
    type: actions.DS_TEMPLATE_NAME,
    templateName
  }
}

export function addFileData(data){
  return {
    type: actions.ADD_FILE_DATA,
    data
  }
}

export function postDocuSignInfo(items){
  return function(dispatch){

  }
}
