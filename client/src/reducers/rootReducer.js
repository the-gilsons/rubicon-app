import * as actions from '../actions/actionsConstants';

const initialState = {
  docuSignEmail: '',
  docuSignPassword: '',
  templateID: '',
  templateName: '',
  fileName: '',
  fileInfo: [],
  canSubmit: false,
  isPostingData: false,
  postingDataSuccess: false,
  postingDataFailure: false,
  errorMsg: ''
}

export default function mailer(state = initialState, action){
  switch (action.type) {
    case actions.DS_EMAIL:
      return Object.assign({}, state, {
        docuSignEmail: action.email
      });
    case actions.DS_PASSWORD:
      return Object.assign({}, state, {
        docuSignPassword: action.password
      });
    case actions.DS_TEMPLATE_ID:
      return Object.assign({}, state, {
        templateID: action.id
      });
    case actions.DS_TEMPLATE_NAME:
      return Object.assign({}, state, {
        templateName: action.templateName
      });
    case actions.ADD_FILE_NAME:
      return Object.assign({}, state, {
        fileName: action.fileName
      });
    case actions.ADD_FILE_DATA:
      return Object.assign({}, state, {
        fileInfo: [...action.data],
        canSubmit: true
      });
    case actions.POST_DATA:
      return Object.assign({}, state, {
        isPostingData: true,
        canSubmit: false
      });
    case actions.POST_DATA_SUCCESS:
      return Object.assign({}, state, {
        isPostingData: false,
        postingDataSuccess: true,
        errorMsg: ''
      });
    case actions.POST_DATA_FAILURE:
      return Object.assign({}, state, {
        isPostingData: false,
        postingDataFailure: true,
        errorMsg: 'Error: Unable to send emails'
      })
    default:
      return state;
  }
}
