import { useEffect, useState } from 'react';
import MenuComponent from '../menu.component';
import Book from './Book';
import './books.css';

import book1 from "../../img/books/1.jpg";
import book2 from "../../img/books/2.jpg";
import book3 from "../../img/books/3.jpg";

function Books() {
  const books = [
    {part: 1, name: 'Part 1', img: book1},
    {part: 2, name: 'Part 2', img: book2},
    {part: 3, name: 'Part 3', img: book3},
  ]

  const [booksList, setBooksList] = useState(books)

  useEffect( () => {
    fetch('https://the-one-api.dev/v2/book/')
      .then(response => response.json())
        .then(data => 
          setBooksList(booksList.map(
            (item, index) => ({...item, ...data.docs[index]})
          ))) 
  }, [])
  
  return (
    <div className='wrapper'>
      <MenuComponent />
      <div className="books">
        <ul>
        {booksList.map(book => <Book img={book.img} name={book.name} key={book.part + book.name}/>)}
        </ul>
      </div>
    </div>
  )
};

export default Books;

