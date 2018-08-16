import React, { Component } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText, FormFeedback, Collapse, Card, CardBody, Navlink, ButtonToolbar
} from 'reactstrap';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { BussiReg } from "components/PopUp"


import './test.css';



class test extends Component {
  constructor(props) {
	super(props);
	
      this.state = {
      'email': '',
	  'password': '',
	  'confirmpassword': '',
      validate: {
		emailState: '',
		passwordState: '',
		confirmPasswordState: ''
      },
    }
    this.handleChange = this.handleChange.bind(this);
  }

  validateEmail(e) {
	const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state
	  if (emailRex.test(e.target.value)) 
	  {
        validate.emailState = 'has-success'
	  } 
	  else 
	  {
        validate.emailState = 'has-danger'
      }
      this.setState({ validate })
	}
	
  validatePassword(e) {
	 const passwordRex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	 const { validate } = this.state
	 if (passwordRex.test(e.target.value)) 
	 {
		validate.passwordState = 'has-success'
	 } 
	 else 
	 {
	   validate.passwordState = 'has-danger'
	 }
	 this.setState({ validate }) 
	}

  validateConfirmPassword(e) {
	  const confirmPasswordRex =  /^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$/;
	  const { validate } = this.state
	  if (confirmPasswordRex.test(e.target.value)) 
	  {
		  validate.confirmpasswordState = 'has-success'
		  
	  } 
	  else 
	  {
		validate.confirmpasswordState = 'has-danger'  
		
	  }
	  this.setState({ validate }) 
	  }
	  


  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [ name ]: value,
    });
  }

  submitForm =e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.setState({
        email: "",
        password: "",
        confirmpassword:""
      });
      this.props.onChange({

      });
    }
  };

  render() {
    const { email, password, confirmpassword } = this.state;
    return (
      <Container className="test">
        <h2>회원가입</h2>	
        <Form className="form" onSubmit={ (e) => this.submitForm(e) }>
          <Col>
            <FormGroup>
              <Label>이메일</Label> 
              <Input
                type="email"
                name="email"
                id="Email"
                placeholder="회사 업무용 메일 계정을 이용해 주세요"
                value={ email }
				valid={ this.state.validate.emailState === 'has-success' }
				invalid={ this.state.validate.emailState === 'has-danger' }
                onChange={ (e) => {
                            this.validateEmail(e)
                            this.handleChange(e)
                          } }
              />
              <FormFeedback valid>
                쓰셈
              </FormFeedback>

              <FormFeedback invalidcompanyemail>
                
              </FormFeedback>

			  <FormFeedback invalid>
                이메일 형식에 맞게 다시 입력해 주세요!
              </FormFeedback>

              <FormText></FormText>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Password">비밀번호</Label>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="비밀 번호를 입력해 주세요"
				value={ password }
				valid={ this.state.validate.passwordState === 'has-success' }
                invalid={ this.state.validate.passwordState === 'has-danger' }
                onChange={ (e) => {
					this.validatePassword(e) 
					this.handleChange(e)
				 } }
            />
			 <FormFeedback valid>
                
				</FormFeedback>
				<FormFeedback>
				  형식에 맞게 다시 입력해 주세요! (8자 이상, 하나 이상의 숫자 및 대문자 특수 문자를 모두 포함해야 합니다.)
				</FormFeedback>
				<FormText></FormText>
			  </FormGroup>
			</Col>
			<Col>
			<FormGroup>
			  <Label for="confirmPassword">비밀번호 확인</Label>
              <Input
                type="password"
                name="confirmpassword"
                id="confirmpassword"
                placeholder="비밀 번호를 입력해 주세요"
				value={ confirmpassword }
				valid={ this.state.validate.confirmpasswordState === 'has-success' }
                invalid={ this.state.validate.confirmpasswordState === 'has-danger' }
				onChange={ (e) => {
					this.validateConfirmPassword(e) 
					this.handleChange(e)
				 } }
            />
			 <FormFeedback valid>
                 성공
				</FormFeedback>

				<FormFeedback>
				  실패
				</FormFeedback>
				<FormText></FormText>
            </FormGroup>
          </Col>

		 
		
  		<Button href="./companyjoin">확인</Button>
	    <BussiReg />

		 
      </Form>
      </Container>
    );
  }
}

export default test