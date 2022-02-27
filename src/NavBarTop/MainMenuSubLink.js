import React from 'react'

const MainMenuSubLink = (props) => {
  const {id, title} = props;
  return (
    <li key={id} onMouseEnter={() => console.log(id)}><a href="#">{title}</a></li>
  )
}

export default MainMenuSubLink