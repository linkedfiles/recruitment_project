import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Redirect} from 'react-router-dom';
import request from 'superagent';

export default class LI_01 extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {email: false, modal:false, logininfo:null, emailmodal:false, jump:''};
    this.toggle = this.toggle.bind(this);
    this.logintoggle = this.logintoggle.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.isemailValid = this.isemailValid.bind(this);
  }

  componentWillMount(){
    request
      .post('http://localhost:3001/api/v1/users/login')
      .accept('application/json')
      .end((err, res) => {
        this.loadedJSON(err, res)
      })
  }

  loadedJSON(err, res) {
    if(err) {
      console.log('JSON을 읽어 들이는 동안 오류가 발생했습니다.')
      return
    }
    this.setState({
      logininfo: res.body
    })
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  logintoggle() {
    this.setState({
      emailmodal: !this.state.emailmodal
    });
  }

  handleValidSubmit(event, values) {
    this.setState({email: values.email});
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true});
  }

  closeModal() {
    this.setState({email: false, error: false});
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  handlevalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  isemailValid() {
    if(this.state.logininfo.authorization === true){
      this.setState({jump:"/hanadul"})
    }
    else{
      this.setState({emailmodal: !this.state.emailmodal})
    }
  }


  render() {
    const modalError = this.state.error ? '실패' : '성공';
    if (this.state.jump) {
      return <Redirect to={this.state.jump} />
    };
    return (
      <div>
        <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
          <AvField name="email" label="이메일" type="email" placeholder="abc@companym.com" required />
          <AvField name="password" label="비밀번호" type="password" placeholder="password" required /> 
          {/* availity reactstrap password 정규표현식 수정 */}
          <Button onClick={this.isemailValid} size="lg" color="primary">로그인</Button>
          <Modal isOpen={this.state.emailmodal} toggle={this.logintoggle}>
            <ModalHeader>
              이메일을 확인해 주세요
            </ModalHeader>
            <ModalBody>
              afasdfasdfasdf
            </ModalBody>
          </Modal>
        </AvForm>
        <Modal isOpen={this.state.email !== false} toggle={this.closeModal}>
          <ModalHeader toggle={this.closeModal}> {modalError} </ModalHeader>
          <ModalBody>
             ({this.state.email})은 {modalError}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.closeModal}>확인</Button>
          </ModalFooter>
        </Modal>
        <div>
        <Button color="link" onClick={this.toggle}>{this.props.buttonLabel}비밀번호 찾기</Button>
           <Modal size="lg" isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>비밀번호를 잊으셨나요? </ModalHeader>
          <ModalBody>
             <h2>당황하지 마세요 </h2>
             <p>비밀번호를 다시 설정할 수 있는 메일을 보내 드리겠습니다. </p>
             <p>아래 버튼을 클릭 해 주세요 </p>
             <Button color="primary" size="lg"> 비밀 번호 재 설정 메일 요청 </Button>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">확인</Button>
          </ModalFooter>
        </Modal>
        {this.state.values && <div>
          <h5>json</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
          </div>}
        </div>
      </div>
    );
  }
}
