import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const Auth = (props, context) => (
    <div className={styles.content}>
        <div className={styles.logopage}>
            <div className={styles.welcome}>WELCOME TO</div>
        </div>
        <div className={styles.loginpage}>
            <form className={styles.login} onSubmit={props.handleSubmit} method="post">
                <div>
                    <label for="email">이메일</label>
                    <input type="text" onChange={props.handleInputChange} name="email" value={props.usernameValue}/>
                </div>
                <div>
                    <label for="password">비밀번호</label>
                    <input type="password" onChange={props.handleInputChange} name="password" value={props.passwordValue}/>
                </div>
                <input type="submit" value="log in"/>
            </form>
        </div>
    </div>

);

Auth.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    usernameValue: PropTypes.string.isRequired,
    passwordValue: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
 


 export default Auth;