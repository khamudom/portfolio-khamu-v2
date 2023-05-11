import React from 'react';
import styles from './Toast.module.scss';

const Toast = () => {
  return (
    <div className={styles.toast}>
      <p>Thank you for your message!</p>
    </div>
  );
};

export default Toast;
