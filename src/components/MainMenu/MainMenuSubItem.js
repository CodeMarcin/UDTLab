import React, { useState, useEffect, useCallback } from 'react';

import MainMenuSecondSubItem from './MainMenuSecondSubItem';

import styles from './css/MainMenuSubItem.module.css';

const MainMenuSubItem = (props) => {
  const { isSubMenuActive, subMenuArray } = props;
  
  const [showSecondSubMenuItem, setShowSecondSubMenuItem] = useState(false);
  const [activeSecondSubMenu, setActiveSecondSubMenu] = useState();

  const toogleShowSecondSubMenuItem = (event) => {
    if (
      activeSecondSubMenu === event.target.getAttribute('data-secondsubmenuid')
    ) {
      setShowSecondSubMenuItem((prevValue) => !prevValue);
    } else {
      setShowSecondSubMenuItem(true);
    }
    setActiveSecondSubMenu(() =>
      event.target.getAttribute('data-secondsubmenuid')
    );
  };

  console.log(isSubMenuActive);
  return isSubMenuActive ? (
    <ul className={`${styles['mainMenuSubItem']} ${styles['active']}`}>
      {subMenuArray.map((subMenuItem) => {
        const { id, title, subMenu } = subMenuItem;
        return (
          <>
            <li
              className={
                showSecondSubMenuItem &&
                activeSecondSubMenu === `${id}` &&
                styles['active']
              }
            >
              <button
                onClick={toogleShowSecondSubMenuItem}
                data-secondsubmenuid={id}
              >
                {title}
              </button>
              {showSecondSubMenuItem && activeSecondSubMenu === `${id}` && (
                <MainMenuSecondSubItem secondSubMenuArray={subMenu} />
              )}
            </li>
          </>
        );
      })}
    </ul>
  ) : (
    <ul className={`${styles['mainMenuSubItem']}`}></ul>
  );
};

export default MainMenuSubItem;
