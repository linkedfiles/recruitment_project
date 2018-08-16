//CSS 적용 시 세로로 변경

import React from "react";
import { Text, Box, Link, Container } from "gestalt";
import "gestalt/dist/gestalt.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this._handleChange.bind(this);
    this.state = {
      value: ""
    };
  }
  _handleChange({ value }) {
    this.setState({ value });
  }

  render() {
    return (
      <Box paddingY={2}>
        <Box>
          <Text align="center" color="white">
            <Link href="/companyadminpage">
              <Box padding={2}>회사 정보 관리</Box>
            </Link>
          </Text>
        </Box>

        <Box>
          <Text align="center" color="white">
            <Link href="/memberadminpage">
              <Box padding={2}>맴버 관리</Box>
            </Link>
          </Text>
        </Box>

        <Box>
          <Text align="center" color="white">
            <Link href="/recruitprset">
              <Box padding={2}>공고 홍보 설정</Box>
            </Link>
          </Text>
        </Box>

        <Box>
          <Text align="center" color="white">
            <Link href="/subcriptiondue">
              <Box padding={2}>이용권 관리</Box>
            </Link>
          </Text>
        </Box>

        <Box>
          <Text align="center" color="white">
            <Link href="/memberinfopage">
              <Box padding={2}>회원 정보 관리</Box>
            </Link>
          </Text>
        </Box>
      </Box>
    );
  }
}

export default Sidebar;
