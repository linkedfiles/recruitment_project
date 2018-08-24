import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card, Icon, Col } from 'reactstrap';


//import Popup from "./components/OutputForm/Popup";
// import "./signInput.css"

class InviteCard extends React.Component {
  render() {
      return (
<div>          
 <Col lg={{ size: '10', offset: 1 }}> 
 <Card>
     
   <Form>
  <Col lg={{ size: '4', offset: 1 }}> 
    <FormGroup>
      <Label bold for="exampleEmail">Email</Label>
      <Input type="email" name="email" id="invitemail" placeholder="초대할 분의 메일 주소를 입력해 주세요" />
    </FormGroup>
        
   </Col>
    <Col lg={{ size: '4', offset: 1 }}> 
     <Button color="secondary">초대메일 보내기</Button>{' '}  <Button color="secondary">취소</Button>{' '}
    </Col>
  

    </Form>
   </Card>
  </Col>
</div>

    );
  }
}

export default InviteCard;
