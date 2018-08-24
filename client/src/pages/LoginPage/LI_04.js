import React from 'react';
import { MiddleNavbar } from 'components/LayOut'
import { Button } from 'reactstrap';


export default class LI_04 extends React.Component {
    render() {
    return (

        
      <div>
       <MiddleNavbar />

       <h1>가이드 페이지 </h1>





       <Button color="primary"> 회사 정보 입력 하러 가기</Button>
      </div>
    );
  }
}