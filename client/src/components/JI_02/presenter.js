import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";

const JI_02 = (props, context) => (
    <div className={styles.wrapper}>
    <div className={styles.content}>
        <div className={styles.logopage}> 
            <div className={styles.welcome}>
                WELCOME TO
            </div>
        </div>
        <div className={styles.loginpage}>
            <div className={styles.infotextbox}>
                <div className={styles.textmessage}>
                ‘직업 안정법’ 및 ‘직업 안정법 시행령’ 의해 회사의 채용을 진행하기 위해서는 회원님이 소속된 회사의 정확한 정보가 필요합니다. 
                </div>
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
                    <div className={styles.inputbox}>
                        <div className={styles.col30}>
                        <label htmlFor="companyno">사업자 등록 번호</label>
                        </div>
                        <div className={styles.col70}>
                        <input type="text" placeholder="-없이 번호만 입력해 주세요" onChange={props.handleInputChange} name="companyno" value={props.companynoValue}/>
                        </div>
                    </div>
                    <div className={styles.inputbox}>
                        <div className={styles.col30}>
                        <label htmlFor="companydomain">회사 인터넷 도메인</label>
                        </div>
                        <div className={styles.col70}>
                        <input type="text" placeholder="회사 인터넷 주소가 있는 경우 입력해 주세요" onChange={props.handleInputChange} name="companydomain" value={props.companydomainValue}/>
                        </div>
                    </div>
                    <hr />
                    <input type="submit" className={styles.button} value="입력 완료됨"/>
                </form>
            </div>
        </div>
    </div>
    </div>
);

JI_02.PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
    companynameValue: PropTypes.string.isRequired,
    companynoValue: PropTypes.string.isRequired,
    companydomainValue: PropTypes.string.isRequired,
}

export default JI_02;