//사용할 헤더 밑작업

import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";


const LoginHeader = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
          <div className={styles.logocolumn}> 
              <Link onClick={this.forceUpdate} to={'/'}>
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
                <img
                 src={require("assets/img/user-icon.png")}
                 className={styles.usericon}
                 
               />  
              </div>
              
           </div>

            </div>
          
          </div> 
         
     
        
);

export default LoginHeader;