import React from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";


class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { styles } = this.props;

    const style = {
      Navbar: {
        position: "fiexd",
        top: 0,
        overflow: "hidden",
        maxHeight: 100
      }
    };
    return (
      <div>
        <Navbar
          style={{ ...styles, ...style.navbar }}
          color="info"
          light
          expand
          className="topnavbar"
        >
          <NavbarBrand href="/">STDIO.H</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav pullRight className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dologin">LI_01</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/repasswordset">LI_02</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/guidepage">LI_04</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/emailjoin">JI_01</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/companyjoin">JI_02</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hanadul">JI_04</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar style={{ minWidth: 200 }}>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>회사 정보 관리</DropdownItem>
                  <DropdownItem>맴버 관리</DropdownItem>
                  <DropdownItem>공고 홍보 설정</DropdownItem>
                  <DropdownItem>이용권 관리</DropdownItem>
                  <DropdownItem>회원 정보 관리</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>로그아웃</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default TopNavbar;
