import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const LI_03 = (props, context) => {
    return(
        <div className={styles.wraper}>
            <div className={styles.box}>
                <div className={styles.column1}>
                    <div className={styles.logo_group}>
                        <div className={styles.welcometo}>WELCOME TO</div>
                        <div className={styles.logo}>
                            <img src={require("assets/img/card_logo.png")}/>
                        </div>
                    </div>
                </div>

                <div className={styles.column2}>
                    <div className={styles.header}>멤버 참여 여부 결정 </div>
                    <hr className={styles.hr}></hr>
                    <div className={styles.sub_header_light}>입력하신 사업자 번호 123-29-19239 에 해당하는<br></br> (주) 삼성전자의 채용 게시판이 이미 개설되어 있습니다.</div>
                    {/*사업자 번호, 회사명 props 추가*/}
                    <div className={styles.content1}>이 회사의 채용 게시판에 참여하시겠습니까?</div>
                    <div className={styles.content2}>아래의 동의 버튼을 클릭하시면, 해당 회사 게시판 <br></br>마스터 등급자의 승인 이후 사용 가능합니다.</div>
                    
                    <div className={styles.buttongroup}>
                    <button  class="JSButton red wide">예, 참여하겠습니다</button>

                    <button  class="JSButton blue wide">아니오, 무시하고 다시 개설하겠습니다</button>
                    
                    </div>
                </div>
            </div>
        </div>
            
    );
}

LI_03.PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
    companynamevalue: PropTypes.string.isRequired
}

export default LI_03;