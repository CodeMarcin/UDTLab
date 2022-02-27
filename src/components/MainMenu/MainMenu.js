import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useState, useRef, useEffect, useCallback } from 'react';

import { mainMenuArray } from '../../arrays/mainMenu-array';

import useOnScreen from '../../hooks/useOnScreen';

import styles from './css/MainMenu.module.css';
import MainMenuSubItem from './MainMenuSubItem';

const MainMenu = () => {
  const [showSubMenuItem, setShowSubMenuItem] = useState();
  const [activeSubMenu, setActiveSubMenu] = useState();

  const hamburgerRef = useRef();
  const hamburgerIsVissible = useOnScreen(hamburgerRef);

  const [showOffcanvas, setShowOffCanvas] = useState(false);

  const toogleSubMenuHandler = (event) => {
    if (activeSubMenu === event.target.getAttribute('data-submenuid')) {
      setShowSubMenuItem((prevValue) => !prevValue);
    } else {
      setShowSubMenuItem(true);
    }
    setActiveSubMenu(() => event.target.getAttribute('data-submenuid'));
  };

  const checkIsHamburgerIsVisible = useCallback(() => {
    if (hamburgerIsVissible) {
      setShowOffCanvas(false);
    } else {
      setShowOffCanvas(true);
    }
  }, [hamburgerIsVissible]);

  useEffect(() => {
    checkIsHamburgerIsVisible();
  }, [checkIsHamburgerIsVisible]);

  const toogleOffCanvasHandler = () => {
    setShowOffCanvas((prevValue) => !prevValue);
  };

  return (
    <>
      <div className={styles['wrapper']}>
        <nav className={styles['mainMenu']}>
          <div className={styles['logo']}>
            <img src="https://cdn-icons.flaticon.com/png/512/2717/premium/2717562.png?token=exp=1645268417~hmac=4f83e0722f42ab9b5545a7651cd8c173"></img>
            <h3>UDT Lab</h3>
          </div>
          <div ref={hamburgerRef} className={styles['hamburger']}>
            {!showOffcanvas ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3388/3388829.png"
                onClick={toogleOffCanvasHandler}
                alt="test"
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/3388/3388658.png"
                onClick={toogleOffCanvasHandler}
                alt="test"
              />
            )}
          </div>

          {showOffcanvas ? (
            <ul key="test" className={styles['active']}>
              {mainMenuArray.map((mainMenuItem) => {
                const { id, title, subMenu } = mainMenuItem;
                if (subMenu === undefined) {
                  return (
                    <li>
                      <button href="/home">{title}</button>
                    </li>
                  );
                }

                return (
                  <li
                    className={
                      showSubMenuItem &&
                      activeSubMenu === `${id}` &&
                      styles['active']
                    }
                  >
                    <button onClick={toogleSubMenuHandler} data-submenuid={id}>
                      {title}
                    </button>
                    {showSubMenuItem && activeSubMenu === `${id}` && (
                      <MainMenuSubItem
                        isSubMenuActive={showSubMenuItem}
                        subMenuArray={subMenu}
                      />
                    )}
                  </li>
                );
              })}

              <li>
                <a href="/logowanie">
                  <button className="btn btn-two">Zaloguj</button>
                </a>
              </li>
            </ul>
          ) : (
            <ul key="test"></ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default MainMenu;
