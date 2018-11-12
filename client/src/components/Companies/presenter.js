import React, {Component} from 'react';
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";



export const getCompaniesInfo = props => {
    <div>{props.Companies.map(post => post.caption)}</div>
};

const Companies = (props) => {
   if(props.Companies.companies1 !== null) {
       return <Redirect to= "/MyPage"/>
   }
   return<Redirect to= "/ji04"/>
}


Companies.propTypes = {
    Companies: PropTypes.array.isRequired
}


export default Companies;


