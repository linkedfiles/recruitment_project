//사용할 헤더 밑작업

import React from "react";
import styles from "./styles.scss";


const Header = (props, context) => (
    <header className={styles.header}>
        <div className={styles.column}>
          <nav>
            <ul>
              <li className={styles.listItem}>대시보드</li>
              <li className={styles.listItem}>지원자 관리</li>
              <li className={styles.listItem}>메시지함</li>
            </ul>
         </nav>
        </div>
        <div>  
            <span>usericon</span>
        </div>
    </header>   
);

export default Header;