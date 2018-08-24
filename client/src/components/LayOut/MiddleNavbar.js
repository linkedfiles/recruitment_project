import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  Dropdown,
  NavbarBrand
} from "reactstrap";

class MiddleNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      companyname: [{ id: 0, name: "삼성전자" }, { id: 1, name: "LG전자" }]
     
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
      
    });
  }

  render() {
    return (
      <div>
       <Navbar color="light">
       <NavbarBrand >
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>회사명</DropdownToggle>
          <DropdownMenu>
            {this.state.companyname.map((companyname, i) => {
              return <CompanyList name={companyname.name} key={i} />;
            })}
          </DropdownMenu>
        </ButtonDropdown>
        </NavbarBrand >
        <Dropdown isOpen={this.state.company} toggle={this.toggle}>
        <DropdownToggle caret>
          삼성전자 홍길동
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
        </Dropdown>
        </Navbar>
      </div>
    );
  }
}

class CompanyList extends React.Component {
  render() {
    return <DropdownItem>{this.props.name}</DropdownItem>;
  }
}

export default MiddleNavbar;