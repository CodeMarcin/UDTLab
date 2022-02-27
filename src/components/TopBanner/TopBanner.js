import React from 'react';
import LeftBanner from './LeftBanner';
import styles from './css/TopBanner.module.css';
import RightBanner from './RightBanner';
const TopBanner = () => {
  return (
    <div className={styles['topBanner']}>
      <LeftBanner />
      <RightBanner />
    </div>
  );
};

export default TopBanner;
