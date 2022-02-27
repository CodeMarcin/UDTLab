import React from 'react'

import styles from './css/SingleItem.module.css'

const SingleItem = (props) => {

  const { img, title, text } = props;

  return (
    <div className={styles['singleItem']}>
        <img src={img} alt={title} />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
  )
}

export default SingleItem