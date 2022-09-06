import React from 'react';
import './heroes.css';

function Hero({birth, death, gender, name, race, realm, wiki, id}) {
  const testData = (data) => {
    if (data === '') {
      return 'неизвестно'
    } else if (data === 'NaN') {
      return 'неизвестно'
    }  else if (data === undefined) {
      return 'неизвестно'
    } else {
      return data
    }
  }

  return (
    <li className='hero'>
      <h3>{name}</h3>
      <ul className='hero-item-paramert'>
        <li><p>Дата рождения: </p><p>{testData(birth)}</p></li>
        <li><p>Дата смерти: </p><p>{testData(death)}</p></li>
        <li><p>Пол: </p><p>{testData(gender)}</p></li>
        <li><p>Раса: </p><p>{testData(race)}</p></li>
        <li><p>Королевство: </p><p>{testData(realm)}</p></li>
      </ul>
      <a className='hero-item-ref' href={wiki} target="_blank">Личная страница на lotr-wiki</a>
    </li>
  )
};

export default Hero;