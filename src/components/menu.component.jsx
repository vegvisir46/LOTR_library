import MenuItem from "./menuItem";
import imgBook from "../img/menu/books-stack-of-three.png";
import imgFilm from "../img/menu/film-reel.png";
import imgHero from "../img/menu/lord.png";
import imgExit from "../img/menu/free-icon-exit-320140.png";
import { Link, useLocation } from "react-router-dom";

function MenuComponent() {
  const menu = [
    { name: 'books', text: 'Книги', id: 1, img: imgBook }, 
    { name: 'movie', text: 'Фильмы', id: 2, img: imgFilm }, 
    { name: 'heroes', text: 'Герои', id: 3, img: imgHero }
  ]
  const location = useLocation();
  
  return (
    <div className={`${location.pathname === '/' ? 'menu' : 'menu menu-click'}`} id='menu'>
      {menu.map (obj => (
        <Link to={`/${obj.name}`} key={obj.id + obj.name}>
        <MenuItem text={obj.text} icon={obj.img} id={obj.id}/>
        </Link>
      ))}

      {location.pathname !== '/'
      ? (<Link to='/'><div className="menu-exit">
          <img src={imgExit}/>
          <p>Меню</p>
        </div></Link>)
      : ''}
    </div>
  )
};

export default MenuComponent;