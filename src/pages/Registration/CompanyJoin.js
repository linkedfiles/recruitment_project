import React from "react";
import { BasicInput } from "components/InputForm";
import { Button, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

class CompanyJoin extends React.Component {
  render() {
    return (
      <div>
        <Box alignItems="center" padding={1} width={420}>
          <BasicInput
            htmlFor="companyname"
            title="회사명"
            signinfo="companyname"
            signplaceholder="사업자등록증상의 회사명을 입력 해 주세요"
            signtype="companyname"
          />
          <BasicInput
            htmlFor="companyregnum"
            title="사업자 등록 번호"
            signinfo="companyregnum"
            signplaceholder="-없이 번호만 입력해 주세요"
            signtype="companyregnum"
          />
          <BasicInput
            htmlFor="companydomain"
            title="회사 인터넷 도메인"
            signinfo="companydomain"
            signplaceholder="회사 인터넷 주소가 있는 경우 입력 해 주세요."
            signtype="companydomain"
          />
          <Box topmargin={2} padding={1} width={420}>
            <Button size="sm" text="입력완료" />
          </Box>
        </Box>
      </div>
    );
  }
}

export default CompanyJoin;
