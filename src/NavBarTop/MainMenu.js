import React, { useState } from 'react';

import { mainMenuArray } from '../arrays/mainMenu-array';

import TopMenu from './TopMenu';
import LeftSubMenu from './LeftSubMenu';

import styles from './css/MainMenu.module.css';

const MainMenu = () => {
  return (
    <nav>
      <div className={styles['navBar']}>
        <ul>
          {mainMenuArray.map((menuItem, index) => {
            const { id, title, subMenu } = menuItem;
            if (subMenu === undefined) {
              return <li>{title}</li>;
            }

            return (
              <li>
                {title}
                <ul>
                  <li>
                    <h4>{title}</h4>
                  </li>
                  {subMenu.map((item) => {
                    return (
                      <li>
                        {item.title}
                        <ul>
                          <li><h3>{item.title}</h3></li>
                          {item.subMenu.map((item) => {
                            return <li>{item.title}</li>;
                          })}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
