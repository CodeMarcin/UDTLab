import React from 'react';

import styles from './css/MenuContainer.module.css';

const MenuContainer = ({ children }) => {
  return <div className={styles['menuContainer']}>{children}</div>;
};

export default MenuContainer;
