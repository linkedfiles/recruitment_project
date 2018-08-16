import React from 'react';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio, FormFeedback } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

import { BussiReg } from "components/PopUp"

export default class CompanyJoin extends React.Component {
  constructor(props) {
    super(props);

    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.state = {};
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({errors, values});
  }

  render() {
    return (
      <div>
        <AvForm onInvalidSubmit={this.handleInvalidSubmit}>
          {/* With AvField */}
          <AvGroup>
            <Label for="companyname">회사명</Label>
            <AvInput name="companyname" id="companyname" required />
            <AvFeedback>회사명이 빠졌습니다.</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="companynumber">사업자등록번호</Label>
            <AvInput name="companynumber" id="companynumber" required />
            <AvFeedback>사업자등록번호가 빠졌습니다.</AvFeedback>
          </AvGroup>
          <AvGroup>
            <Label for="companydomain">회사 도메인</Label>
            <AvInput name="companydomain" id="domain" />
          </AvGroup>     
          <FormGroup>
            <Button>입력완료</Button>
          </FormGroup>
        </AvForm>
        <BussiReg />
        {this.state.values && <div>
          <h5>json</h5>
          Invalid: {this.state.errors.join(', ')}<br />
          Values: <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
        </div>}
      </div>
    );
  }
}

