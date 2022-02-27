import React, { useState, useEffect, useCallback } from 'react';

import RightSubMenu from './RightSubMenu';

const LeftSubMenu = (props) => {
  const [selectedSubMenu, setSelectedSubMenu] = useState(-1);

  const openSubMenu = (index) => {
    setSelectedSubMenu(selectedSubMenu === index ? -1 : index);
  };

  let { id, title, subMenu, showSubMenu, subMenuToShow } = props;

  return (
    showSubMenu && (
      <ul>
        <li>
          <h4>{title}</h4>
        </li>
        {subMenu.map((item, index) => {
          
        })}
      </ul>
    )
  );
};

export default LeftSubMenu;
