import React, { useState, useEffect } from 'react';

import { mainMenuArray } from '../../arrays/mainMenu-array';

import OffCanvasSubItem from './OffCanvasSubItem';

import styles from './css/OffCanvasMenu.module.css';

const OffCanvasMenu = (props) => {
  const { isSubMenuActive } = props;
  const [showSubMenuItem, setShowSubMenuItem] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState();

  const toogleShowSubMenuItem = (event) => {
    if (activeSubMenu === event.target.getAttribute('data-subMenuId')) {
      setShowSubMenuItem((prevValue) => !prevValue);
    } else {
      setShowSubMenuItem(true);
    }
    setActiveSubMenu(() => event.target.getAttribute('data-subMenuId'));
  };

  const clickApartForm = (event) => {
    if (!event.target.hasAttributes()) {
      setShowSubMenuItem(false);
    } else if (
      event.target.getAttribute('data-subMenuId') === null &&
      event.target.getAttribute('data-secondSubMenuId') === null
    ) {
      setShowSubMenuItem(false);
    }
  };

  return (
    <div
      className={`${styles['offCanvasMenu']} ${
        isSubMenuActive && styles['active']
      }`}
    >
      <ul onClick={clickApartForm}>
        {mainMenuArray.map((mainMenuItem) => {
          const { id, title, subMenu } = mainMenuItem;
          if (subMenu === undefined) {
            return (
              <li>
                <a href="#">{title}</a>
              </li>
            );
          }

          return (
            <li
              className={
                showSubMenuItem && activeSubMenu === `${id}` && styles['active']
              }
            >
              <a onClick={toogleShowSubMenuItem} data-subMenuId={id}>
                {title}
              </a>
              {showSubMenuItem && activeSubMenu === `${id}` && (
                <OffCanvasSubItem onClickHandler={clickApartForm} subMenuArray={subMenu} />
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
    </div>
  );
};

export default OffCanvasMenu;
