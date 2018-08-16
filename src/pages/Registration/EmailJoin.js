import React from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

export default class EmailJoin extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {};
  }

  handleSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  render() {
    return (
      <div>
        <AvForm onSubmit={this.handleSubmit}>
          <AvField name="useremail" label="이메일" type="email" required/>
          <AvField name="password" label="비밀번호" type="password" required/>
          <AvField name="confimpassword" label="비밀번호 확인" type="password" validate={{match:{value:'password'}}} required/>
          <AvField name="username" label="이름" type="name" required/>
          
          <AvGroup check>
            <Label check for="checkItOut">
              <AvInput type="checkbox" name="checkItOut" /> 이용약관
            </Label>
          </AvGroup>
          
          <FormGroup>
            <Button>가입</Button>
          </FormGroup>
        </AvForm>
        {this.state.values && <div>
          <h5>json</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}