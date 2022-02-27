import React from 'react';

import styles from './css/OffCanvasSecondSubItem.module.css';

const OffCanvasSecondSubItem = (props) => {
  const { secondSubMenuArray } = props;
  return (
    <div className={styles['offCanvasSecondSubItem']}>
      <ul>
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
    </div>
  );
};

export default OffCanvasSecondSubItem;
