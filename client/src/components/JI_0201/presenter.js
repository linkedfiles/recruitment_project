import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const JI_0201 = (props, context) => (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.logopage}>
                <div className={styles.welcome}>
                    WELCOME TO
                </div>
            </div>    
            <div className={styles.loginpage}>
                <div className={styles.textbox}>
                    가입된 회사 찾기
                </div>
                <div className={styles.formComponent}>
                    <form className={styles.form} method="post">
                        <hr />
                        <div className={styles.inputbox}>
                            <div className={styles.col30}>
                                <label htmlFor="companyname">회사명</label>
                            </div>
                            <div className={styles.col70}>
                                <input type="text" placeholder="사업자등록증상의 회사명을 입력해 주세요" onChange={props.handleInputChange} name="companyname" value={props.companynameValue}/>
                            </div>
                        </div>
                        <button className={styles.button} type="submit">입력 완료</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

JI_0201.PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
    companynamevalue: PropTypes.string.isRequired
}

export default JI_0201;