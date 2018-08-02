import React from "react";
import { BasicInput } from "components/InputForm";
import { CheckBox } from "components/RadioButton";
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
            signplaceholder="회사 업무용 메일 계정을 입력 해 주세요."
            signtype="emailreg"
          />
          <BasicInput
            htmlFor="pwdreg"
            title="비밀번호"
            signinfo="pwdreg"
            signplaceholder="비밀 번호를 입력 해 주세요."
            signtype="pwdreg"
          />
          <BasicInput
            htmlFor="pwdchk"
            title="비밀번호 확인"
            signinfo="pwdchk"
            signplaceholder="비밀 번호를 다시 한 번 입력 해 주세요."
            signtype="pwdchk"
          />
          <BasicInput
            htmlFor="namereg"
            title="이름"
            signinfo="namereg"
            signplaceholder="실명을 입력하셔야 다른 멤버들이 알 수 있습니다."
            signtype="namereg"
          />
          <Box>
            <CheckBox
              chkbxid="termofuse"
              name="termofuse"
              chkbxhtmlFor="termofuse"
              chkbxcontents="이용약관/개인정보취급방침 동의"
            />
            <Button size="sm" text="내용보기" />
          </Box>
          <Button size="sm" text="가입" />
        </Box>
      </div>
    );
  }
}

export default EmailJoin;
