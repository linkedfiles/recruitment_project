//사용할 헤더 밑작업

import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import styles from "./styles.scss";


const LoginHeader = (props, context) => (
    <div className={styles.navigation}>
        <div className={styles.inner}>
          <div className={styles.logocolumn}> 
              
           </div>
             <div className={styles.menucolumn}>
              <div className={styles.navmenu1}>
                <Link to ="/JI_04" style={{ color: '#FFF' , textDecoration: 'none' }}>
                  개발보드관리
                </Link>
              </div>
              <div className={styles.navmenu2}>
                <NavLink to ="/" className="item2" activeclassName="active" style={{ color: '#FFF', textDecoration: 'none' }}>
                  코드 관리
                </NavLink>
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