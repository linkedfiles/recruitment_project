import React from "react";
import { BasicInput } from "components/InputForm";
import { Button, Box, Column } from "gestalt";
import "gestalt/dist/gestalt.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Box alignItems="center" padding={1} width={420} 
        display="flex" deirection="row" paddingY ={2}>
        <Column span={12}> 
          <BasicInput
            htmlFor="email"
            title="이메일"
            signinfo="email"
            signplaceholder="이메일 정보를 입력하세요."
            signtype="email"
          />
          <BasicInput
            htmlFor="password"
            title="비밀번호"
            signinfo="password"
            signplaceholder="비밀번호를 입력하세요."
            signtype="password"
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
          <hr/>
          SNS로 시작하기
          <Box topmargin={2} padding={1} width={420}>
            <Button size="sm" text="Facebook" />   
          </Box>
          <Box topmargin={2} padding={1} width={420}>
            <Button size="sm" text="Linkedin" />
          </Box>
          </Column>
        </Box>
      </div>
    );
  }
}

export default LoginPage;
