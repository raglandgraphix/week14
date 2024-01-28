import React,{Component} from "react";
import Review from './Review';
//This is the review list used to create the correnct number of reviews in the correct spot.
export default class ReviewList extends Component{
constructor(props){
    super(props)
}
//this cycles through my data an input the reviews in the proper number and locations.
render(){
    const reviews = this.props.reviews;
    let items = reviews.map((review,index) => <Review key={index} review = {review}/>);
    return(
        <>
       {items} 
        </>
    )
}
}