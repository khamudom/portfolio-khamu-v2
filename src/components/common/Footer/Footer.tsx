import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divider} />
      </div>
    </footer>
  );
};

export default Footer;
