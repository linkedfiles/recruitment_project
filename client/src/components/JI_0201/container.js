import React, { Component } from "react";
import JI_0201 from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
    state = {
        companyname:""
    };

    render() {
        const { companyname } = this.state;
        return(
            <JI_0201 handleInputChange = {this._handleInputChange} companynameValue={companyname} />
        );
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name] : value
        });
    };
}

export default Container;