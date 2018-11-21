// flow test
import React from 'react';
import styles from "./styles.scss";

const LI04 = () => {
    return (
        <div className={styles.li04}>
            <div className={styles.column}>
                <div className={styles.box1}>
                    <div className={styles.box_container1}>
                        <div className={styles.image1}></div>
                        <div className={styles.head1}>회사의 채용 <br></br> 홈페이지를 만드세요</div>
                        <div className={styles.content1}>회사 정보를 입력하면<br></br> 채용 홈페이지가 만들어지고 <br></br> 회사의 매력을 홍보할 수 있습니다.</div>
                    </div>   
                </div>
           
                <div className={styles.triangle}></div>
            
                <div className={styles.box2}>
                    <div className={styles.box_container2}> 
                        <div className={styles.image2}></div>
                        <div className={styles.head2}>채용할 분야의 <br></br>공고 페이지를 만드세요</div>
                        <div className={styles.content2}>채용 분야에 대한 자세한 정보를 <br></br> 쉽게 빠르게 설정할 수 있습니다. </div>
                    </div>
                </div>
            
                <div className={styles.triangle}></div>
            
                <div className={styles.box3}>
                    <div className={styles.box_container3}> 
                        <div className={styles.image3}></div>
                        <div className={styles.head3}>채용 절차에 참여할 <br></br>멤버를 초대하세요</div>
                        <div className={styles.content3}>멤버를 초대하면 이력서 검토, 평가 <br></br> 의견 교환을 온라인으로 할 수 있습니다. </div>
                    </div>
                </div>
            
            </div>
        </div>
        
    );
};

export default LI04;
 