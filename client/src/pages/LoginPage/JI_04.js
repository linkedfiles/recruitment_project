import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { Button, Table, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { requestApiData } from "../../actions";
import { isUndefined } from 'util';


class JI_04 extends React.Component {
  constructor(props){
    super(props);
    this.state={ modal:false, invitemodal: false, acceptmodal:false, jump:'' };
  }
  componentDidMount(){
    this.props.requestApiData();
  }



  shouldComponentUpdate(nextProps, nextState){
    console.log(JSON.stringify(nextState))
    return true;
  }
  render() {
    if (this.state.jump) {
      return <Redirect to={this.state.jump} />
    };

    console.log(this.props.data)
    console.log(this.state.modal)
    return (
      <div>
        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            멤버 참여 여부 결정
          </ModalHeader>
          <ModalBody>
            채용게시판에 초대 받으셨습니다. 아래의 동의 버튼을 클릭하면 해당 게시판에 참여하게 됩니다.
            <Button>예, 참여하겠습니다.</Button>
          </ModalBody>
        </Modal>
        <Modal>
          <ModalHeader>
            아직, 참여가 확인되지 않았습니다.
          </ModalHeader>
          <ModalBody>
            아직 참여가 허용되지 않은 상태입니다. 해당 회사 마스터등급자의 승인 이후 이용하실 수 있습니다.
            <Button>확인</Button>
          </ModalBody>
        </Modal>
        
        <h5>본격적으로 JUPSU 를 활용하시기 전에 아래의 2가지를 확인해 주세요</h5>
     
        <h3 className="hana-title">단계 하나 </h3>
        <h5>'직업안정법' 및 '직업안정법 시행령' 의해 회사의 채용을 진행하기 위해서는 회원님이 소속된 회사의 정보를 등록해 주세요. 또한,
            이미 누군가가 회사의 정보를 등록하여 채용 게시판이 개설 중인 상태일 수도 있으니, 확인이 필요합니다.
            아래 버튽을 클릭하시고 회사 정보를 입력해 주세요.
        </h5>
        
        <Button>회사 정보 입력하기</Button>

       
        <h3 className="hana-title">단계 둘 </h3>

        <h5>
            JUPSU 는 채용업무를 효과적으로 진행할 수 있도록 도와 드립니다.
            내부 임직원만이 참여하는 것이 아니라, 필요하다면 채용하고자 하는 분야의 외부 전문가의 도움을 받아 진행할 수 있습니다.
            우리 회사의 채용업무를 위해 아래의 사용자 분류 별 권한 내용을 참고하여, 내부 임직원 및 외부 전문가를 활용해 보세요.
        </h5>

            <Table>
        <thead>
          <tr>
            <th></th>
            <th>Master</th>
            <th>Manger</th>
            <th>Recruiter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">권한설정(부여)</th>
            <td>ㅇ</td>
            <td>ㅇ(해당 공고 내에서만 가능)</td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">공고 관리</th>
            <td>ㅇ</td>
            <td>ㅇ</td>
            <td>X</td>
          </tr>
          <tr>
            <th scope="row">평가자 초대</th>
            <td>ㅇ</td>
            <td>ㅇ</td>
            <td>ㅇ</td>
          </tr>
          <tr>
            <th scope="row">지원자 평가</th>
            <td>ㅇ</td>
            <td>ㅇ</td>
            <td>ㅇ</td>
          </tr>
        </tbody>
      </Table>

        <Button>확 인</Button>


      </div>
    );
  }
}

const mapStateToprops = state => ({ data: state.data })

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToprops, mapDispatchToProps)(JI_04);