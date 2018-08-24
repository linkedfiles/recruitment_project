import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, FormText, FormGroup } from 'reactstrap';

class BussiReg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}사업자 등록증 업로드</Button>
        <Modal size="lg" isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>사업자 등록증을 보내주세요!</ModalHeader>
          <ModalBody>
            회원님이 등록하신 회사 정보의 사업자 등록증을 등록해 주셔야 정상적인 서비스 이용이 가능합니다.
            <FormGroup>
              <Label for="FileUdate"></Label>
               <Input type="file" name="file" id="FileUpdate" />
                <FormText color="muted">
                  사업자 등록증은 3MB 이하의 PDF 혹은 이미지 파일로 등록해 주세요
                </FormText>
            </FormGroup>    
         </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>등록 하기</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>취소</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BussiReg;