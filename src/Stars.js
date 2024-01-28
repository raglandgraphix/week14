import React, { Component }  from "react";
const defaultMaxRating = 5;
export default class Stars extends Component{
    constructor(props){
        super(props)
        
       
        
      }

     #handleClick=(e) => {
       
        const rating = e.target.dataset.rating;
        if(this.props.onRatingChange){
            this.props.onRatingChange(rating, this.props.rating || 0);
        }
       
    }
      
render(){
    let myRating = this.props.rating || 0;
    let maxRating = this.props.maxRating || defaultMaxRating;
    let ratingVal = [];
    //let myRating = this.stars.rating;
    
   for(let run = 0;run<maxRating;run++){
    const icon = (run < myRating)?'bi-star-fill' :'bi-star';
    
        // ratingVal.push(<i className="bi bi-star me-1"></i>);
        ratingVal.push(<i key={run} onClick={this.#handleClick} className={`bi ${icon} me-1`} data-rating={run+1}></i>);
   }
   
    return(
        <>
      
       
        {ratingVal}
      
        </>
    )
}

}