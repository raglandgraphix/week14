import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import MovieList from './MovieList';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// ... other imports

const App = () => { // Use a functional component with hooks
  const [movieList, setMovieList] = useState([]); // State for movie data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch('https://65b2114c9bfb12f6eafcb9f9.mockapi.io/movieReview')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setMovieList(data); // Set movieList state with fetched data
        setIsLoading(false); // Set loading to false
      })
      .catch(error => {
        setError(error.message); // Set error message
        setIsLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array to fetch only once

  return (
    <div className='App'>
      <div className='mainHold'>
        {/* {isLoading && <p>Loading movies...</p>}
        {error && <p>Error: {error}</p>}
        {movieList.length > 0 && ( */}
          <MovieList movies={movieList} />
        {/* )} */}
      </div>
    </div>
  );
};



export default App;
