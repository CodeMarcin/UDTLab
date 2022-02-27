import React, { useState } from 'react';

import styles from './css/OffCanvasSubItem.module.css';

import OffCanvasSecondSubItem from './OffCanvasSecondSubItem';

const OffCanvasSubItem = (props) => {
  const { onClickHandler, subMenuArray } = props;
  const [showSecondSubMenuItem, setShowSecondSubMenuItem] = useState(false);
  const [activeSecondSubMenu, setActiveSecondSubMenu] = useState();

  const sendToClickApartForm = (event) => {
    if (event.target.hasAttributes()) {
      onClickHandler(event);
    }
  };

  const toogleShowSecondSubMenuItem = (event) => {
    if (
      activeSecondSubMenu === event.target.getAttribute('data-secondSubMenuId')
    ) {
      setShowSecondSubMenuItem((prevValue) => !prevValue);
    } else {
      setShowSecondSubMenuItem(true);
    }
    setActiveSecondSubMenu(() =>
      event.target.getAttribute('data-secondSubMenuId')
    );
  };

  return (
    <div className={styles['offCanvasSubItem']}>
      <ul onClick={sendToClickApartForm}>
        {subMenuArray.map((subMenuItem) => {
          const { id, title, subMenu } = subMenuItem;
          return (
            <li
              className={
                showSecondSubMenuItem &&
                activeSecondSubMenu === `${id}` &&
                styles['active']
              }
            >
              <a
                onClick={toogleShowSecondSubMenuItem}
                data-secondSubMenuId={id}
              >
                {title}
              </a>
              {showSecondSubMenuItem && activeSecondSubMenu === `${id}` && (
                <OffCanvasSecondSubItem secondSubMenuArray={subMenu} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OffCanvasSubItem;
