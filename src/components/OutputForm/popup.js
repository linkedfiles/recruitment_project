import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from "reactstrap"; 


class popup extends React.Component {
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
        <Col>
        <Button onClick={this.toggle}>버튼{this.props.ButtonLabel}</Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}>

          <ModalHeader toggle={this.toggle}>이메일을 확인해 주세요{this.props.Title}</ModalHeader>
          <ModalBody>{this.props.Body}방금! 가입하신 계정 ㅇㅇㅇ@ㅇㅇㅇ.com으로 메일을 보내 드렸습니다. 메일에 첨부됨 버튼을 클릭하시고 
          인증을 받으셔야 회원 가입 절차가 마무리 되며, JUPSU 의 모든 기능을 사용하실 수 있습니다.
          
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>{this.props.close}</Button>
          </ModalFooter>
        </Modal>
        </Col>
      </div>
    );
  }
}

export default popup;
