import {connect} from 'react-redux';
import * as actions from '../actions/actionsMailer';
import Home from '../components/home';

function mapDispatchToProps(dispatch){
  return {
    addEmail: function(email){
      dispatch(actions.addDocuSignEmail(email));
    },
    addPassword: function(password){
      dispatch(actions.addDocuSignPassword(password));
    },
    addTemplateId: function(id){
      dispatch(actions.addDocuSignTempID(id));
    },
    addTemplateName: function(name){
      dispatch(actions.addDocuSignTempName(name));
    },
    addFileName: function(file){
      dispatch(actions.addFileName(file));
    },
    addFileData: function(data){
      dispatch(actions.addFileData(data));
    },
    postMailerInfo: function(items){
      dispatch(actions.postDocuSignInfo(items));
    }
  }
}

function mapStateToProps(state){
  return {
    data: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
