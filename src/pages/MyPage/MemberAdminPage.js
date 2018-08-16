import React from "react";
import { Sidebar, MiddleNavbar } from "components/LayOut";
import { UserCard, InviteCard, BtnLessCard } from "components/Cards";
//import { BasicInput } from "components/InputForm";
//import { TextAreaField } from "components/InputTextField"
import {
  Button,
  Box,
  Column,
  Text,
  Avatar,
  Icon,
  Heading,
  Container
} from "gestalt";
import { Col } from "reactstrap";
import "gestalt/dist/gestalt.css";
import "./CompanyInfoAdminPage.css";

class MemberAdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: [
        {
          id: 0,
          userimg:
            "http://t1.daumcdn.net/liveboard/_profile/2a3452cf6ffb4f6291faad65ec7c7d15.png",
          username: "박보검",
          useremail: "abc@company.com",
          rank: "master"
        },
        {
          id: 1,
          userimg:
            "http://t1.daumcdn.net/liveboard/_profile/2a3452cf6ffb4f6291faad65ec7c7d15.png",
          username: "이병헌",
          useremail: "def@company.com",
          rank: "manager"
        },
        {
          id: 2,
          userimg:
            "http://t1.daumcdn.net/liveboard/_profile/2a3452cf6ffb4f6291faad65ec7c7d15.png",
          username: "김성철",
          useremail: "ghi@company.com",
          rank: "manager"
        },
        {
          id: 3,
          userimg:
            "http://t1.daumcdn.net/liveboard/_profile/2a3452cf6ffb4f6291faad65ec7c7d15.png",
          username: "최지용",
          useremail: "jkl@company.com",
          rank: "manager"
        }
      ]
    };
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

          <Column span={11}>
            <MiddleNavbar />
            <Box position="relative">
              <Box color="white" padding={1}>
                <Box color="white" paddingY={2}>
                  <Box marginBottom="4">
                    <Heading size="sm">멤버 관리</Heading>
                  </Box>

                  <Box marginBottom="2">
                    <Heading color="green" size="xs">
                      회사의 채용 과정(이력서 평가, 면접)에 참여한 분들의 권한
                      설정을 하거나 새로운 멤버를 초대 할 수 있습니다.
                    </Heading>
                  </Box>
                </Box>
                <Box />

                <Box
                  alignItems="center"
                  direction="row"
                  display="flex"
                  marginEnd={-1}
                  color="lightGray"
                >
                  <Box marginbottom={2} paddingY={2}>
                    <Heading size="xs">
                      link의 채용 업무(이력서 평가, 면접) 참여자 리스트
                    </Heading>
                  </Box>
                </Box>

                <Box paddingX={1}>
                  <Text>
                    {" "}
                    Master 등급 회원은 아래 등록된 분들의 등급을 변경하거나,
                    회원 정리를 하실 수 있습니다.
                  </Text>
                </Box>
                <Col xs="11">
                  <Col xs="4">
                    {this.state.Data.map((data, i) => {
                      return (
                        <UserCard
                          img={data.userimg}
                          name={data.username}
                          email={data.useremail}
                        />
                      );
                    })}
                  </Col>
                </Col>
                <Box
                  color="lightGray"
                  marginbottom={2}
                  paddingY={2}
                  alignItems="center"
                  direction="row"
                  display="flex"
                  marginEnd={-1}
                >
                  <Heading size="xs">
                    link의 채용 업무(이력서 평가, 면접) 참여 초대하기
                  </Heading>
                </Box>

                <Box marginbottom={4} paddingY={8}>
                  <InviteCard />
                </Box>

                <Box display="flex" direction="row" paddingY={2}>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BtnLessCard />
                      </Box>
                    </Box>
                  </Column>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BtnLessCard />
                      </Box>
                    </Box>
                  </Column>
                </Box>

                <Box
                  color="lightGray"
                  marginbottom={2}
                  paddingY={2}
                  alignItems="center"
                  direction="row"
                  display="flex"
                  marginEnd={-1}
                >
                  <Heading size="xs">link의 채용 업무 등록 신청자</Heading>
                </Box>

                <Box paddingX={1}>
                  <Text>
                    {" "}
                    아래 리스트는 우리 회사 채용 업무 게시판에 참여 하길 원하는
                    새로운 회원 입니다.
                  </Text>
                  <Text>
                    {" "}
                    회사의 구성원이 맞는지 확인 하신 후, 마스터 등급의
                    회원께서는 아래 신청자의 참여 여부를 결정해 주세요.
                  </Text>
                </Box>

                <Box display="flex" direction="row" paddingY={2}>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BtnLessCard />
                      </Box>
                    </Box>
                  </Column>
                  <Column span={4}>
                    <Box color="white" padding={1}>
                      <Box color="white" paddingX={2}>
                        <BtnLessCard />
                      </Box>
                    </Box>
                  </Column>
                </Box>
              </Box>
            </Box>
          </Column>
        </Box>
      </div>
    );
  }
}

export default MemberAdminPage;