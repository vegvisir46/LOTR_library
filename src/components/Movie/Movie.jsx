import React from 'react';

function Movie({name, nominations, runtime, budget, boxOffice, wins }) {
  return (
    <li className='movie'>
      <h3>{name}</h3>
      <ul className='movie-item-paramert'>
        <li><p>Номинации на премию кино-академии:</p> <p>{nominations}</p></li>
        <li><p>Победы в премии кино-академии: </p><p>{wins}</p></li>
        <li><p>Кассовые сборы в миллионах: </p><p>{boxOffice}</p></li>
        <li><p>Бюджет в миллионах: </p><p>{budget}</p></li>
        <li><p>Длительность: </p><p>{runtime}</p></li>
      </ul>
    </li>
  )
}

export default Movie;