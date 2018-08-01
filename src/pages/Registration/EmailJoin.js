import React from "react";
import { BasicInput } from "components/InputForm";
import { Button, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

class EmailJoin extends React.Component {
  render() {
    return (
      <div>
        <Box alignItems="center" padding={1} width={420}>
          <BasicInput
            htmlFor="emailreg"
            title="이메일"
            signinfo="emailreg"
            signplaceholder="이메일 정보를 입력하세요."
            signtype="emailreg"
          />
          <BasicInput
            htmlFor="passwordreg"
            title="비밀번호"
            signinfo="passwordreg"
            signplaceholder="비밀번호를 입력하세요."
            signtype="passwordreg"
          />
          <BasicInput
            htmlFor="passwordchk"
            title="비밀번호 확인"
            signinfo="passwordchk"
            signplaceholder="비밀번호를 한번 더 입력하세요."
            signtype="passwordchk"
          />
          <BasicInput
            htmlFor="name"
            title="이름"
            signinfo="name"
            signplaceholder="실명으로 입력하세요."
            signtype="name"
          />
          <Box topmargin={2} padding={1} width={420}>
            <Button size="sm" text="가입" />
          </Box>
        </Box>
      </div>
    );
  }
}

export default EmailJoin;
