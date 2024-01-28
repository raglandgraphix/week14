import React,{Component} from "react";
import Movie from "./Movie";
//Movie list that creates the correct number of movies
export default class MovieList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const movies = this.props.movies;
        let items = movies.map((movie,index) => <Movie key={index} movie = {movie}/>);
        return(
            <>
            {items}
            </>
        );
    }
}