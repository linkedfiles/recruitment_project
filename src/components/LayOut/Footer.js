import React from "react";
import { Navbar, Nav, NavItem, Col } from "reactstrap";

const Footer = () => {
  return (
    <div>
      <p
        ClassName="footer"
        frameBorder="0"
        scrolling="0"
        width="100"
        height="20px"
      >
        <Navbar color="info" light expand>
          <Nav navbar color="light">
            <NavItem>Stdio.h</NavItem>
          </Nav>
        </Navbar>
      </p>
    </div>
  );
};

export default Footer;
