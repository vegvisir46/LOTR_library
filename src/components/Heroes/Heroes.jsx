import { useEffect, useState } from 'react';
import './heroes.css';
import axios from 'axios';
import token from "../../other/token.jsx";
import MenuComponent from '../menu.component';
import Hero from './Hero';
import { Pagination, Input, Select } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const { Option } = Select;

function Heroes() {
  const [heroes, setHero] = useState([]);
  const [page, setPage] = useState({pageSize: 10, pageNumber: 1});
  const [name, setName] = useState ('');
  const [race, setRace] = useState ('');
  const [length, setLength] = useState (1);

  const onSearch = (value) => setName(`${value}`);
  const onChange = (pageNumber, pageSize) => {
    setPage({pageSize: pageSize, pageNumber: pageNumber})
  };

  const races = [' ', 'люди', 'хоббиты', 'эльфы и полуэльфы', 
    'гномы', 'орки', 'энты', 'айнур', 'существа и животные'];

  const onSelect = (value, obj) => {
    switch (obj.children) {
      case 'люди': 
        return setRace('Human,Men');
      case 'хоббиты':
        return setRace('Hobbit,Hobbits');
      case 'эльфы и полуэльфы':
        return setRace('Elf,Elves,Half-elven');
      case 'гномы':
        return setRace('Dwarf,Dwarves');
      case 'орки':
        return setRace('Orc,Uruk-hai');
      case 'энты':
        return setRace('Ent,Ents');
      case 'айнур':
        return setRace('Ainur');
      case 'существа и животные':
        return setRace(
          'Dragon,Dragons,Eagle,GreatEagles,Balrog,GreatSpiders,Horse,WolfHound,Raven');
      default:
        return setRace('');
    }
  };

  const usedParamert = (name, race, page) => {
    if (name === '') {
      return `race=${race}&limit=${page.pageSize}&page=${page.pageNumber}`
    } else {
      return `name=${name}`
    }
  };

  const calcLength = (name, race) => {
    if (name === '') {
      return `race=${race}`
    } 
  };
  
  useEffect (() => {
    const LoadHeroes = async () => {
      const response = await axios.get(
  `https://the-one-api.dev/v2/character?${usedParamert(name, race, page)}`,
        {headers: {Authorization: `Bearer ${token}`}}
      )
      setHero(response.data.docs)
      const responseLength = await axios.get(
        `https://the-one-api.dev/v2/character?${calcLength(name, race)}`,
        {headers: {Authorization: `Bearer ${token}`}}
      )
      setLength(responseLength.data.total)
    }
    LoadHeroes ()
  }, [page, name, race, length])

  return (
    <div className='wrapper'>
      <MenuComponent />
      <div className="heroes">
        <div className='filters'>
          <div className='filters-search'>
            <Search placeholder="Введите имя искомого персонажа" onSearch={onSearch} enterButton />
          </div>
          <Select className='filters-race'
            showSearch onSelect={onSelect}
            placeholder="Выбор расы"
            optionFilterProp="children"
            filterOption={(input, option) => option.children.includes(input)}
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {races.map((item, index) => <Option key={index}>{item}</Option>)}
          </Select>
        </div>
        <ul>
          {heroes.map(
            (hero, index) => <Hero 
              key={index}
              birth={hero.birth}
              death={hero.death}
              gender={hero.gender}
              name={hero.name}
              race={hero.race}
              realm={hero.realm}
              wiki={hero.wikiUrl}
              id={hero.id}
              />)}
        </ul>
        {name ==='' && length>page.pageSize 
          ? <Pagination  className="pagination" 
              showQuickJumper defaultCurrent={1} 
              total={length} onChange={onChange} defaultPageSize={10} />
          : ''}
      </div>
    </div>
  )
};

export default Heroes;