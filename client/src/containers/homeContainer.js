import {connect} from 'react-redux';
import * as actions from '../actions/actionsMailer';
import Home from '../components/home';

function mapDispatchToProps(state){
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
    dispatch(actions.addTemplateName(name));
  },
  addFileData: function(data){
    dispatch(actions.addFileData(data));
  }
  postMailerInfo: function(){
    dispatch(actions.postDocuSignInfo())
  }
}

function mapStateToProps(state){
  canSubmit: this.state.mailer.canSubmit;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
