import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button } from 'reactstrap';

export default class LI_02 extends React.Component {
  render() {
    return (
    <div>
      <h2>비밀번호 다시 설정하기</h2>
      <AvForm>
        <AvField name="repassword" label="비밀번호 입력" type="password" />
        <AvField name="confirmpassword" label="비밀번호 확인" type="password" validate={{match:{value:'repassword'}}} />
        <Button size="lg" color="primary">비밀 번호 재 설정 완료</Button>
      </AvForm>
    </div>  
    );
  }
}