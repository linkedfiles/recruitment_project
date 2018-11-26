import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.scss";


const LI_03_01 = (props, context) => {
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
                    <div className={styles.sub_header}>입력하신 사업자 번호 123-29-19239 에 해당하는<br></br> (주) 삼성전자의 채용 게시판에 초대 받으셨습니다.</div>
                    {/*사업자 번호, 회사명 props 추가*/}
                    <div className={styles.content1}>아래의 동의 버튼을 클릭하시면,<br></br> 해당 회사 게시판에 참여 하게 됩니다.</div>
                    
                    
                    <div className={styles.buttongroup}>
                    <button  class="JSButton red wide">예, 참여하겠습니다</button>

                    <button  class="JSButton blue wide">아니오, 참여하지 않겠습니다</button>
                    
                    </div>
                </div>
            </div>
        </div>
            
    );
}

LI_03_01.PropTypes = {
    handleInputChange: PropTypes.func.isRequired,
    companynamevalue: PropTypes.string.isRequired
}

export default LI_03_01;