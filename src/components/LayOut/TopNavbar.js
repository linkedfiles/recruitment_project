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

import { Link } from "react-router-dom";

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
                <NavLink href="/dologin">DoLogin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/companyadminpage">CompanyInfoAdminPage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/memberadminpage">MemberAdminPage</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/companyjoin">CompanyJoin</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/emailjoin">EmailJoin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar style={{ minWidth: 200 }}>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
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
