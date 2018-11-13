import React from "react";
import PropTypes from "prop-types";

const SignupForm = (props, context) => {
    <div>
        <form onSubmit={props.handleSubmit} method="post">
            <input type="email" placeholder="email" value={props.emailValue} onChange={props.handleInputChange} name="email"/>
            <input type="password" placeholder="password" value={props.passwordValue} onChange={props.handleInputChange} name="password"/>
            <input type="text" placeholder="enter password again" value={props.repasswordValue} onChange={props.handleInputChange} name="repassword"/>
            <input type="text" placeholder="name" value={props.nameValue} onChange={props.handleInputChange} name="name"/>
            <input type="submit" value="Sign up" onChange={props.handleInputChange}/>
        </form>
    </div>
}

export default SignupForm;