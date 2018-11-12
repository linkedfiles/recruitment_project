import React from "react";
import PropTypes from "prop-types";

const Auth = (props, context) => (
    <div>
        <form onSubmit={props.handleSubmit} method="post">
            <input type="text" placeholder="id" onChange={props.handleInputChange} name="email" value={props.usernameValue}/>
            <input type="password" placeholder="password" onChange={props.handleInputChange} name="password" value={props.passwordValue}/>
            <input type="submit" value="log in"/>
        </form>
    </div>

);

Auth.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
 


 export default Auth;