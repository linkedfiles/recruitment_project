import React, {Component } from "react";
import PropTypes from "prop-types";
import Companies from "./presenter";

class Container extends Component {
    constructor(props) {
    super(props);
    this.state = {
        Companies: []
     };
    }
    static PropTypesd = {
        getCompanies: PropTypes.func.isRequired,
        Companies: PropTypes.array
    };

    componentDidMount() {
        const { getCompanies } = this.props;
        getCompanies();
}

    componentWillReceiveProps = (nextProps) => {
        this.setState({
         companyinfo: nextProps.Companies,
        });
    }
    
    render() {
        return <Companies {...this.state} />;
        
    }
  }


export default Container;