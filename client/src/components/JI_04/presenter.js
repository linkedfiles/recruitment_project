import React from 'react';
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const JI04 = () => {
    return (
        <div className={styles.ji04}>
            <div className={styles.column1}>
                
                <div className={styles.step01}> 01 단계 </div>
                <div className={styles.step02}> 02 단계 </div>
            </div>    

            <div className={styles.column2}>
                    <div className={styles.content1}> ‘직업 안정법’ 및 ‘직업안정법 시행령’ 에 의해 회사의 채용을 진행하기 위해서는 회원님이 소속된 회사의 정확한 정보를 등록해 주세요.
                    또한 이미 누군가가 회사의 정보를 등록하여 채용 게시판이 개설 중인 상태일 수도 있으니, 확인이 필요합니다.</div>

                    <div className={styles.content2}> 아래 버튼을 클릭하시고 회사 정보를 입력해 주세요. 

                    <div className={styles.buttons}>
                        <button  class="JSButton midblue half" ><Link to ="/JI_0201" style={{ color: '#FFF' , textDecoration: 'none' }}>입된 회사 찾기</Link></button>
                            <div className={styles.space}></div>
                        <button  class="JSButton midblue half"> 신규회사 입력하기</button>
                    </div>

                    </div>

                    <div className={styles.content3}> 
                         JUPSU 는 채용업무를 효과적으로 진행할 수 있도록 도와 드립니다. <br></br>
                         내부 임직원만이 참여하는 것이 아니라, 필요하다면 채용하고자 하는 분야의 외부 전문가의 도움을 받아 진행할 수 있습니다. <br></br>
                         우리 회사의 채용업무를 위해 아래의 사용자 분류 별 권한 내용을 참고하여, 내부 임직원 및 외부 전문가를 활용해 보세요.                                 
                   </div>

                   
                   <table className={styles.type01}>

                    <tr>
                        <th className ={styles.th} scope="row"></th>
                        <th className ={styles.main_th} scope="row">Master</th>
                        <th className ={styles.main_th} scope="row">Manger</th>
                        <th className ={styles.main_th} scope="row">Recuiter</th>
                    </tr>

                     <tr>
                      <th className ={styles.th} scope="row">권한설정 (부여)</th>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>●</td>
                      <td className= {styles.td}>Ｘ</td>
                    </tr>

                    <tr>
                      <th className ={styles.th} scope="row">공고 관리</th>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>Ｘ</td>
                    </tr>

                      <tr>
                      <th className ={styles.th} scope="row">평가자 초대</th>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>○</td>
                    </tr>

                    <tr>
                      <th className ={styles.th} scope="row">지원자 평가</th>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>○</td>
                      <td className= {styles.td}>○</td>
                    </tr>
                    </table>
            </div>
        </div>
        
    );
};

export default JI04;
 