import React from 'react'

import styles from './css/MainMenuSecondSubItem.module.css'

const MainMenuSecondSubItem = (props) => {
  const { secondSubMenuArray } = props;
  return (
    <ul className={styles["mainMenuSecondSubItem"]}>
        {secondSubMenuArray.map((secondSubMenuItem) => {
          const { id, title, code } = secondSubMenuItem;
          return (
            <li>
              <a href="#">
                <span className="badge badge-one">{code}</span>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
  )
}

export default MainMenuSecondSubItem