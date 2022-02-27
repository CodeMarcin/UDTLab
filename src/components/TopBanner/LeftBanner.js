import React from 'react';

import styles from './css/LeftBanner.module.css';

const LeftBanner = () => {
  return (
    <div className={styles["leftBanner"]}>

      <h1>OFERTA DLA OŚRODKÓW SZKOLENIOWYCH</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button className='btn btn-one'>Sprawdź</button>
    </div>
  );
};

export default LeftBanner;
