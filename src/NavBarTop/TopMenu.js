import React, { useState } from 'react';

import LeftSubMenu from './LeftSubMenu';

const TopMenu = (props) => {
 

  const [showSubMenu, setShowSubMenu] = useState(false);
  const [subMenuToShow, setSubMenuToShow] = useState('')

  const { id, title, subMenu } = props;

  const showSubMenuHandler = () => {
    setShowSubMenu(!showSubMenu);
    setSubMenuToShow(id);
  };

  return (
    <li>
      <p onClick={showSubMenuHandler}>{title}</p>

      <LeftSubMenu
        id={id}
        title={title}
        subMenu={subMenu}
        showSubMenu={showSubMenu}
        subMenuToShow={subMenuToShow}
     
      />
    </li>
  );
};

export default TopMenu;
