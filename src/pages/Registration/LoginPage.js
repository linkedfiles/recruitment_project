import React from "react";
import { BasicInput } from "components/InputForm";
import { Button, Box } from "gestalt";
import "gestalt/dist/gestalt.css";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <Box alignItems="center" padding={1} width={420}>
          <BasicInput
            htmlFor="email"
            title="email"
            signinfo="email"
            signplaceholder="이메일"
            signtype="email"
          />
          <BasicInput
            htmlFor="password"
            title="password"
            signinfo="password"
            signplaceholder="비밀번호"
            signtype="password"
          />
          <Box topmargin={2} padding={1} width={420}>
            <Button size="sm" text="로그인" />
          </Box>
        </Box>
      </div>
    );
  }
}

export default LoginPage;
