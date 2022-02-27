import React from 'react';
import styles from './css/CardContainer.module.css';
const CardContainer = ({ style, children }) => {
  return (
    <div className={`${styles['cardContainer']}`} style={style}>
      {children}
    </div>
  );
};

export default CardContainer;
