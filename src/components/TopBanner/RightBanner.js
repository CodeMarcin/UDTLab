import React from 'react';
import img01 from '../../assets/img/img_01.png'
import styles from './css/RightBanner.module.css'

const RightBanner = () => {
  return (
    <div className={styles["rightBanner"]}>
      <img src={img01} />
    </div>
  );
};

export default RightBanner;
