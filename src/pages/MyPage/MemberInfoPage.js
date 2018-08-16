import React from "react";
import { Sidebar, MiddleNavbar } from "components/LayOut";
import { BasicInput } from "components/InputForm";
import { TextAreaField } from "components/InputTextField";
import {
  Box,
  Column,
  Text,
  Avatar,
  Icon,
  Heading,
  Container,
  Switch
} from "gestalt";
import "gestalt/dist/gestalt.css";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table
} from "reactstrap";
import "./CompanyInfoAdminPage.css";

class MemberInfo extends React.Component {
  render() {
    return (
      <tr>
        <td>소속 기업명</td>
        <td>{this.props.companyname}</td>
        <td>등급</td>
        <td>{this.props.rank}</td>
      </tr>
    );
  }
}

class MemberInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switched: false,
      userinfo: [
        { companyname: "STDIO.H", rank: "Master" },
        { companyname: "Reseed", rank: "Recruiter" }
      ]
    };
    this.handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    this.setState({ switched: !this.state.switched });
  }
  render() {
    return (
      <div>
        <Box ClassName="fullbox" display="flex">
          <Column span={1}>
            <Box
              ClassName="sidebar"
              color="navy"
              padding={1}
              position="relative"
              height={900}
            >
              <Sidebar />
            </Box>
          </Column>

          <Column xs="11">
            <MiddleNavbar />
            <Box position="relative" padding={12}>
              <Box color="white" padding={1}>
                <Box color="white" paddingY={2}>
                  <span>
                    <Heading size="sm">회원 정보 관리</Heading>
                  </span>
                  <span>
                    <Heading size="xs">
                      회원님이 소속된 채용 게시판 정보입니다.
                    </Heading>
                  </span>
                </Box>

                <Table>
                  <tbody>
                    {this.state.userinfo.map((data, i) => {
                      return (
                        <MemberInfo
                          companyname={data.companyname}
                          rank={data.rank}
                          key={i}
                        />
                      );
                    })}
                  </tbody>
                </Table>

                <Box display="flex" direction="row" paddingY={2}>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="name"
                          title="이름"
                          signinfo="name"
                          signtype="name"
                        />
                      </Box>
                    </Box>
                  </Column>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="email"
                          title="이메일"
                          signinfo="email"
                          signtype="email"
                        />
                      </Box>
                    </Box>
                  </Column>
                </Box>

                <Box display="flex" direction="row" paddingY={2}>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="phonenumber"
                          title="전화번호"
                          signinfo="phonenumber"
                          signtype="phonenumber"
                        />
                      </Box>
                    </Box>
                  </Column>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="department"
                          title="소속"
                          signinfo="department"
                          signtype="department"
                        />
                      </Box>
                    </Box>
                  </Column>
                </Box>

                <Col xs="6">
                  <Label for="file">사 진</Label>
                  <Input type="file" name="file" id="file" />
                  <FormText color="muted">
                    사진은 PNG, JPG 형식으로 2MB 이하를 사용해 주세요.
                  </FormText>
                </Col>
                <FormGroup>
                  <Label for="textarea">메일 서명 관리</Label>
                  <Input type="textarea" name="text" id="text" />
                </FormGroup>

                <Column span={4}>
                  <Box color="white" padding={1}>
                    <Box color="white" paddingX={2}>
                      <BasicInput
                        htmlFor="password"
                        signinfo="password"
                        title="비밀번호 변경"
                        signplaceholder="현재 비밀번호"
                        signtype="password"
                      />
                    </Box>
                  </Box>
                </Column>
                <Box display="flex" direction="row" paddingY={2}>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="newpassword"
                          signinfo="newpassword"
                          signplaceholder="새 비밀번호"
                          signtype="newpassword"
                        />
                      </Box>
                    </Box>
                  </Column>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BasicInput
                          htmlFor="newpasswordchk"
                          signinfo="newpasswordchk"
                          signplaceholder="새 비밀번호 확인"
                          signtype="newpasswordchk"
                        />
                      </Box>
                    </Box>
                  </Column>
                  <Button color="gray">변경</Button>
                </Box>
                <Text bold>알림 설정</Text>
                <Box display="flex" direction="row" paddingY={2}>
                  <Text>
                    새로운 입사 지원자가 발생할 경우, 등록하신 메일로 알려
                    드립니다.
                  </Text>
                  <Switch
                    onChange={this.handleChange}
                    id="emailnotifiacation"
                    switched={this.state.switched}
                  />
                </Box>
              </Box>
            </Box>
          </Column>
        </Box>
      </div>
    );
  }
}

export default MemberInfoPage