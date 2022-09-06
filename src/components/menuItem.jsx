import React from 'react';

function MenuItem({text, icon}) {

  return (
    <div className='menu-item'>
      <div className='menu-item-icon'>
        <img src={icon}></img>
      </div>
      <div className='menu-item-text'>{text}</div>
    </div>
  )
}

export default MenuItem;