import React, { Component } from "react";
import JI_02 from "./presenter";
import PropTypes from "prop-types";

class Container extends Component {
    state= {
        companyname: "",
        companyno: "",
        companydomain: ""
    };

    render() {
        //handleSubmit 차후 추가
        const { companyname, companyno, companydomain } = this.state;
        return(
            <JI_02 handleInputChange = {this._handleInputChange} companynameValue={companyname} companynoValue={companyno} companydomainValue={companydomain} />
        );
    }

    _handleInputChange = event => {
        const {target: { value, name } } = event;
        this.setState({
            [name] : value
        });
    };
}

export default Container;