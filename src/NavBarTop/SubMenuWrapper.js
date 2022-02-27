import React from 'react'

import styles from './css/SubMenuWrapper.module.css'

const SubMenuWrapper = (props) => {
  return (
    <div className={styles["subMenuWrapper"]}>{props.children}</div>
  )
}

export default SubMenuWrapper