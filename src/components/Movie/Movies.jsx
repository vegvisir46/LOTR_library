import { useEffect, useState } from 'react';
import './movie.css';
import axios from 'axios';
import MenuComponent from '../menu.component';
import Movie from "./Movie";
import token from "../../other/token.jsx";

function Movies() {
  const [movie, setMovie] = useState([])
  
  useEffect (() => {
    const LoadMovie = async () => {
      const response = await axios.get(
  'https://the-one-api.dev/v2/movie',
        {headers: {Authorization: `Bearer ${token}`}}
      )
      setMovie(response.data.docs)
    }
    LoadMovie ()
  }, [])

  return (
    <div className='wrapper'>
      <MenuComponent />
      <div className="movies">
        <h2>Movie stats</h2>
        <ul>
            {movie.map(
              movie => <Movie name={movie.name} 
              key={new Date().getTime()+movie.runtimeInMinutes}
              nominations={movie.academyAwardNominations}
              runtime={movie.runtimeInMinutes}
              budget={movie.budgetInMillions}
              boxOffice={movie.boxOfficeRevenueInMillions}
              wins={movie.academyAwardWins}
              />)}
        </ul>
        </div>
    </div>
    
  )
};

export default Movies;
