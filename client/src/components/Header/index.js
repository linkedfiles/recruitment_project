//사용할 헤더 밑작업

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";


const Header = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
          <div className={styles.logocolumn}> 
              <Link onClick={this.forceUpdate} to={"/"}>
              <img
                 src={require("assets/img/logo.png")}
                 className={styles.logo}
                 
               />
               </Link>
           </div>
             <div className={styles.menucolumn}>
              <div className={styles.navmenu1}>
                <Link to ="/JI04" style={{ color: '#FFF' , textDecoration: 'none' }}>
                  대시보드
                </Link>
              </div>
              <div className={styles.navmenu2}>
                <Link to ="/" style={{ color: '#FFF', textDecoration: 'none' }}>
                  지원자 관리
                </Link>
              </div>
              <div className={styles.navmenu3}>
                <Link to ="/" style={{ color: '#FFF', textDecoration: 'none' }}>
                  메세지함
                </Link>
              </div>
          </div>

            

            <div className={styles.join_login_column}>
              <div className={styles.navmenu_login}> 
                <Link to = "/signup" style={{ color: '#FFF', textDecoration: 'none'}}>
                회원가입
                </Link> 
              </div>
              <div className={styles.or}> | </div> 

              <div className={styles.navmenu_login}>
                <Link to = "/" style={{ color: '#FFF', textDecoration: 'none' }}>
                  로그인
                </Link> 
              </div>
           </div>

            </div>
          
          </div> 
         
     
        
);

export default Header;