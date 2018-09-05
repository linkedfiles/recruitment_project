import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from "axios";

export default class LI_01 extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {email: false, modal:false, logininfo:null, emailmodal:false, jump:'', useremail:"", pwd:""};
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
  }


  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleValidSubmit(event, values){
    this.setState({values});
  }

  closeModal() {
    this.setState({email: false, error: false});
  }

  render() {
    const changed = (name, e) => this.setState({[name]: e.target.value})
    const post = () =>{
    var id = document.getElementById("email").value
    var pwd = document.getElementById("password").value
    axios({
      method: 'post',
      url:'http://localhost:3001/api/v1/users/login',
      headers: {'Content-Type': 'application/json'},
      data: {
        email: id,
        password: pwd 
      }
      
    })
    }
    return (
      <div>
        <AvForm onValidSubmit={this.handleValidSubmit}>
          <AvField name="email" id="email" label="이메일" type="email" placeholder="abc@company.com" value={this.state.useremail} onChange={e => changed('useremail', e)} required />
          <AvField name="password" id="password" label="비밀번호" type="password" placeholder="password" value={this.state.pwd} onChange={e => changed('pwd',e)} required /> 
          {/* availity reactstrap password 정규표현식 수정 */}
          <Button size="lg" color="primary" onClick={post}>로그인</Button>
        </AvForm>
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
            <Button color="primary" onClick={this.toggle}>확인</Button>
          </ModalFooter>
        </Modal>
        </div>
        {this.state.values && <div>{this.state.values.email}</div>}
      </div>
    );
  }
}