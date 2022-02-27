import React from 'react';

import styles from './css/LittleBanner.module.css';

const LittleBanner = (props) => {
  const { background, img, title, subTitle, code, text } = props;

  return (
    <div className={styles['littleBanner']}>
      <div className={styles['leftLittleBanner']}>
        <img src={img} alt={title} />
      </div>
      <div className={styles['rightLittleBanner']}>
        <h1>
          {title} <span className="badge badge-one">{code}</span>
        </h1>
        <h2>{subTitle}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default LittleBanner;
