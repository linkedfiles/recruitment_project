import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";

class Container extends Component {
    state = {
        email: "",
        name: "",
        password: "",
        repassword: ""
    };

    static propTypes = {
        createAccount: PropTypes.func.isRequired
    };
    render() {
        const { email, name, password, repassword } = this.state;
        return(
            <SignupForm emailValue={email} passwordValue={password} repasswordValue={repassword} nameValue={name} handleInputChange={this._handleInputChange} handleSubmit={this._handleSubmit} />
        );
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value
        })
    }
    _handleSubmit = event => {
        const { email, name, password } = this.state;
        const { createAccount } = this.props;
        event.preventDefault();
        createAccount(email, name, password);
    }
}

export default Container;