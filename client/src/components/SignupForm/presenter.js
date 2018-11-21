import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const SignupForm = (props, context) => (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.logopage}>
                <div className={styles.welcome}>
                    WELCOME TO
                </div>
            </div>
            <div className={styles.loginpage}>
                <div className={styles.formComponent}>
                    <form className={styles.form} onSubmit={props.handleSubmit} method="post">
                        <div className={styles.inputbox}>
                            <label htmlFor="email">이메일</label>
                            <input type="email" placeholder="회사 업무용 메일 계정을 이용해 주세요" value={props.emailValue} onChange={props.handleInputChange} name="email"/>
                        </div>
                        <div className={styles.inputbox}>
                            <label htmlFor="password">비밀번호</label>
                            <input type="password" placeholder="비밀 번호를 입력해주세요" value={props.passwordValue} onChange={props.handleInputChange} name="password"/>
                        </div>
                        <div className={styles.inputbox}>
                            <label htmlFor="repassword">비밀번호 확인</label>
                            <input type="password" placeholder="비밀 번호를 다시 한번 입력해주세요" value={props.repasswordValue} onChange={props.handleInputChange} name="repassword"/>
                        </div>
                        <div className={styles.inputbox}>
                            <label htmlFor="name">이름</label>
                            <input type="text" placeholder="실명을 입력하셔야 다른 사람들이 알 수 있습니다." value={props.nameValue} onChange={props.handleInputChange} name="name"/>
                        </div>
                        <button className={styles.button} type="submit" onChange={props.handleInputChange}>가입</button>
                        <div className={styles.SNS}>
                            SNS로 로그인하기
                        </div>
                        <div>
                            <button className={styles.googlebutton} type="submit">Google</button>
                            <button className={styles.linkdinbutton} type="submit">Linkdin</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default SignupForm;