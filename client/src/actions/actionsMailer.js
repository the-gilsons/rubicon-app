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

export function addFileName(fileName){
  return {
    type: actions.ADD_FILE_NAME,
    fileName
  }
}

export function addFileData(data){
  return {
    type: actions.ADD_FILE_DATA,
    data
  }
}

export function postData(){
  return {
    type: actions.POST_DATA
  }
}

export function postDataSuccess(){
  return {
    type: actions.POST_DATA_SUCCESS
  }
}

export function postDataFailure(error){
  return {
    type: actions.POST_DATA_FAILURE,
    error
  }
}

export function postDocuSignInfo(items){
  return function(dispatch, getState){
    let state = getState();
    if(!state.isPostingData){
      dispatch(postData());
      return fetch('/api/emailList', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(items)
      })
      .then(function(response){
        if (response.status >= 200 && response.status < 300) {
          dispatch(postDataSuccess());
        } else {
          let error = new Error(response.statusText);
          dispatch(postDataFailure(error));
        }
      })
    }
  }
}
