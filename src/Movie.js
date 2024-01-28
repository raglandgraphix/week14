
import React, { Component } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
//this is the main file before it is rendered into the app
export default class Movie extends Component{
  constructor(props){
    super(props)
    //setting the states
    this.state = {
      rating: (this.props.movie?.rating
                || this.props.rating
                || 0
                ),
      review:(props.movie.review)
    };
    this.movieArray = props.movie
  }
  //this function triggers the 5 start rating
#handleRatingChange = (rating, prevRating) => {
  this.setState({
    rating: rating
  });
}
//this function triggers the review being added. I want to use a form for this but when i click the button i have to click a second time to make it work.
handleReviewSubmit=(e)=>{
  e.preventDefault();
  let textArea = e.target[0].value;
  this.setState({
    review: [...this.state.review, textArea]
  });
  e.target[0].value = "";
};
  render(){  
    //this sets all the variables
    let movieName = this.props.movie.movieName;
    let poster = this.props.movie.poster;
    let review = this.state.review;
    const rating = this.state.rating || 0;
    const name = this.props.movie?.movieName || this.props.movieName || 0;
   return(
      <>
      <div  className='card bg-secondary me-3 Holder'>
        <h3>{movieName}</h3>
        <img src={poster}/>
        <div className='starHolder'>
          <Stars rating={rating} onRatingChange = {this.#handleRatingChange}/>
        </div>
        <h5>Give it a Star</h5>
        <h4>REVIEWS</h4>
        <form onSubmit={this.handleReviewSubmit}>
          <label className='font-weight-bold'>LEAVE A REVIEW</label>
          <textarea name='review' rows='5'></textarea>
          <button className="btn btn-info" type="Submit">Add a Review</button>
        </form>
        <h5>------------------</h5>
        <p>WHAT OTHERS HAVE SAID</p>
        <ReviewList reviews = {review} />
        </div>
       </>
    )
  }
}

