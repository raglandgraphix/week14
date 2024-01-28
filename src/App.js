import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import MovieList from './MovieList';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';


const App = () => { 
  const [movieList, setMovieList] = useState([]); // State for movie data
  
  useEffect(() => {
    fetch('https://65b2114c9bfb12f6eafcb9f9.mockapi.io/movieReview')
      .then(response => response.json())
      .then(data => {
        setMovieList(data); // Set movieList state with fetched data        
      })
      .catch(error => {
        console.log('oops');
        
      });
  }, []); // Empty dependency array to fetch only once

  return (
    <div className='App'>
      <div className='mainHold'>       
          <MovieList movies={movieList} />        
      </div>
    </div>
  );
};



export default App;
