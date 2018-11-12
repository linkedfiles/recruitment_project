import React, { Component } from "react";
import Auth from "./presenter";
import PropTypes from "prop-types";


class Container extends Component {
  state = {
    email: "",
    password: ""
  };
  static propTypes = {
    usernameLogin: PropTypes.func.isRequired
  };
  
  render() {
    const { email, password } = this.state;

    return(
      <Auth handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit} usernameValue={email} passwordValue={password} />
    );
  }

  _handleInputChange = event => {
    const {target: { value, name } } = event;
    this.setState({
      [name] : value
    });
  };

  _handleSubmit = event => {
    const { usernameLogin } = this.props;
    const { email, password } = this.state;
    console.log(email, password);
    event.preventDefault();
    usernameLogin(email, password);
  };
}

export default Container;