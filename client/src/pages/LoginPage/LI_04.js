import React from 'react';
import { MiddleNavbar } from 'components/LayOut'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class LI_04 extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        modal: true
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
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>멤버 참여 여부 결정</ModalHeader>
          <ModalBody>입력하신 사업자 번호  OOO-OO-OOOOO 에 해당하는 ㈜삼성전자의 채용 게시판이 이미 개설되어 있습니다. 이 회사의 채용 게시판에 참여하시겠습니까? 아래의 동의 버튼을 클릭하시면, 해당 회사 게시판마스터 등급자의 승인 이후 사용 가능합니다.</ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle}>예, 참여하겠습니다.</Button>
          </ModalFooter>
        </Modal>
       <MiddleNavbar />

       <h1>가이드 페이지 </h1>





       <Button color="primary"> 회사 정보 입력 하러 가기</Button>
      </div>
    );
  }
}

export default LI_04;