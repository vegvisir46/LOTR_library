import React from 'react';
import './books.css';

function Book({name, img}) {
  return (
    <li className='book'>
      <img src={img}/>
      <p>{name}</p>
    </li>
  )
};

export default Book;