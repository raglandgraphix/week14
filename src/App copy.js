import React from 'react';
import logo from './logo.svg';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// import Movie from './Movie.js';
import MovieList from './MovieList';
import RandomProfileService from './RandomProfileService/RandomProfileService';

 


// Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
// All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.
// Your application must include the following components:



// MovieList: a container for all the Movie components and their data.  
// Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
// Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
// ReviewList: a container inside of a Movie that houses Review components.
// Review: A text review a user can leave on a movie.
// ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.


const service = new RandomProfileService();
export default class App extends React.Component{
  constructor(props){
    super(props)
     //this.something = service.all();
     this.url = 'https://65b2114c9bfb12f6eafcb9f9.mockapi.io/:endpoint';
     //console.log(this.url);
     
     this.state = {
        movie:'fatBike'
     }
    
  }
  
  
   
  render(){
    
    let movieBank = [];
  fetch('https://65b2114c9bfb12f6eafcb9f9.mockapi.io/movieReview')
   
     .then(response =>response.json())
     .then(data => {
       this.setState.movie = 'fat car';
       
       
     })
     .catch(error => {
       console.log('oops');
     })
    
    let fallBack =[
      {
        "movieName": "The Matrix",
        "rating": 4,
        "review": ["I like this movie","This was wicked"],
        "poster": 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg',
        "id": "1"
      },
      {
        "movieName": "Point Break",
        "rating": 3,
        "review": ["It was ok","Surfer Dude!"],
        "poster":"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p13324_p_v10_as.jpg",
        "id": "2"
      },
      {
        "movieName": "John Wick",
        "rating": 5,
        "review": ["It rocked","bang bang shoot them up"],
        "poster":"https://m.media-amazon.com/images/I/71+k2-r7vQL._AC_UF350,350_QL80_.jpg",
        "id": "3"
      }
    ]
    
    let movieList = fallBack;
    function App() {
      
     
      
    
    }
   
    return(
      <div className='App'>
       <div className='mainHold' >
         <MovieList movies = {movieList} />
       </div> 
      </div>
      
     )

  }



}




