import React from "react";
<<<<<<< HEAD
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col } from "reactstrap"; 

=======
import { Modal, Box, Button, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";
>>>>>>> a8539968f1bcb726f66e3f6ad2b4ab6d81648026

class popup extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
=======
    this.handleToggleSmall = this._handleToggleSmall.bind(this);
    this.handleToggleMedium = this._handleToggleMedium.bind(this);
    this.handleToggleLarge = this._handleToggleLarge.bind(this);
    this.state = {
      sm: false,
      md: false,
      lg: false
    };
  }

  _handleToggleSmall() {
    this.setState(prevState => ({ sm: !prevState.sm }));
  }

  _handleToggleMedium() {
    this.setState(prevState => ({ md: !prevState.md }));
  }

  _handleToggleLarge() {
    this.setState(prevState => ({ lg: !prevState.lg }));
  }

  render() {
    const { sm, md, lg } = this.state;
    return (
      <Box width={100}>
        <Box padding={1}>
          <Button text="button" onClick={this.handleToggleSmall} />
          {sm && (
            <Modal
              accessibilityCloseLabel="close"
              accessibilityModalLabel="View default padding and styling"
              heading="비밀번호 재설정"
              onDismiss={this.handleToggleSmall}
              footer={<Button text="닫기" onClick={this.handleToggleSmall} />}
              size="sm"
            >
              <Box padding={2}>
                <Heading size="sm">안내내용</Heading>
              </Box>
            </Modal>
          )}
        </Box>
      </Box>
>>>>>>> a8539968f1bcb726f66e3f6ad2b4ab6d81648026
    );
  }
}

export default popup;
