
//footer

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.scss";


const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.column}>
            <div className={styles.content}><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/">HOME</Link> </div>
            <div className={styles.content}><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/JI04">JI04</Link> </div>
            <div className={styles.content}><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/LI04">LI04</Link> </div>
            <div className={styles.content}><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/JI_02">LI_02</Link> </div>
            <div className={styles.content}><Link style={{ color: '#FFF', textDecoration: 'none' }} to="/JI_0201">LI_0201</Link> </div>
            </div>
        </footer>
    );
};

export default Footer;