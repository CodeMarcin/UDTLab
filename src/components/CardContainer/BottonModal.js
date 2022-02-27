import React from 'react';
import ReactDOM from 'react-dom';
import styles from './css/BottonModal.module.css';

const BottonModal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className={styles['bottonModalWrapper']}>
      <div className={styles['bottonModal']}>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default BottonModal;
