import React from 'react';
import request from 'superagent';
import {Redirect} from 'react-router-dom';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Collapse, Card, CardBody, Button, Label, FormGroup } from 'reactstrap';


export default class EmailJoin extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = { userid: '', passwd: '', jump: '', msg: '', collapse: false, sample:[/[\w\.-]+@naver[.]com/g, /[\w\.-]+@gmail[.]com/g, /[\w\.-]+@daum[.]net/g] }
    
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse})
  }


  api (command) {
    request
      .get('/api/' + command)
      .query({
        userid: this.state.userid,
        passwd: this.state.passwd
      })
      .end((err, res) => {
        if (err) return
        const r = res.body
        console.log(r)
        if (r.status && r.token) {
          // 인증 토큰을 localStorage에 저장
          window.localStorage['user_id'] = this.state.userid
          window.localStorage['auth_token'] = r.token
          this.setState({jump: '/dologin'})
          return
        }
        this.setState({msg: r.msg})
      })
  }

  render() {
    if (this.state.jump) {
      return <Redirect to={this.state.jump} />
    };
    const changed = (name, e) => this.setState({[name]: e.target.value})

    const showCollapse = () => {
      var iscom = document.getElementById("useremail").value;
      for(var i = 0; i < this.state.sample.length; i++){
      if(this.state.sample[i].exec(iscom)){
          this.toggle()
        }
      }
      console.log(iscom)
    }

    return (
      <div>
        <AvForm onSubmit={this.handleSubmit}>
          <AvField id="useremail" name="useremail" label="이메일" type="email" value={this.state.userid} onChange={e => changed('userid', e)} required/>
          <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              회사 업무용 메일로 가입하셔야 같은 회사 멤버들과 쉽게 연결됩니다. 입력하신 메일 계정으로 가입 하겠습니까?
              <Button onClick={this.toggle}>확인</Button>
            </CardBody>
          </Card>
          </Collapse>
          <AvField name="password" label="비밀번호" type="password" value={this.state.passwd} onChange={e => changed('passwd', e)} required/>
          <AvField name="confimpassword" label="비밀번호 확인" type="password" validate={{match:{value:'password'}}} required/>
          <AvField name="username" label="이름" type="name" required/>

          <AvGroup check>
            <Label check for="checkItOut">
              <AvInput type="checkbox" name="checkItOut" /> 이용약관
            </Label>
          </AvGroup>
          
          <FormGroup>
            <Button onClick={showCollapse}>가입</Button>
          </FormGroup>
        </AvForm>

          <button onClick={e => this.api('adduser')}>로그인</button><br />
        {this.state.values && <div>
          <h5>json</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}