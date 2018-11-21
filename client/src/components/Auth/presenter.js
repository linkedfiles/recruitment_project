import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const Auth = (props, context) => (
    <div className={styles.wrapper}>
    <div className={styles.content}>
        <div className={styles.logopage}>
            <div className={styles.welcome}>WELCOME TO</div>
        </div>
        <div className={styles.loginpage}>
            <div className={styles.formComponent}>
                <form className={styles.form} onSubmit={props.handleSubmit} method="post">
                    <div>
                        <label htmlFor="email">이메일</label>
                        <input type="text" onChange={props.handleInputChange} name="email" value={props.usernameValue}/>
                    </div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <input type="password" onChange={props.handleInputChange} name="password" value={props.passwordValue}/>
                    </div>
                    <button className={styles.button} type="submit">로그인</button>
                </form>
            </div>
            <div className={styles.findPassword}>
                <Link to="/" style={{ color: '#707070' , textDecoration: 'none' }}>비밀번호 찾기</Link>
            </div>
            <div className={styles.SNS}>
                SNS로 로그인하기
            </div>
            <div>
                <button className={styles.googlebutton} type="submit">Google</button>
                <button className={styles.linkdinbutton} type="submit">LinkdIn</button>
            </div>
        </div>
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