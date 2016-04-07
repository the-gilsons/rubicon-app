import * as actions from '../actions/actionsConstants';

const initialState = {
  docuSignEmail: '',
  docuSignPassword: '',
  templateID: '',
  templateName: '',
  fileInfo: [],
  canSubmit: false
}

export default function mailer(state = initialState, action){
  switch (action.type) {
    case DS_EMAIL:
      return Object.assign({}, state, {
        docuSignEmail: action.email
      });
    case DS_PASSWORD:
      return Object.assign({}, state, {
        docuSignPassword: action.password
      });
    case DS_TEMPLATE_ID:
      return Object.assign({}, state, {
        templateID: id
      });
    case DS_TEMPLATE_NAME:
      return Object.assign({}, state, {
        templateName: templateName
      });
    case ADD_FILE_DATA:
      return Object.assign({}, state, {
        fileInfo: [...action.data],
        canSubmit: true
      });
    default:
      return state;
  }
}
