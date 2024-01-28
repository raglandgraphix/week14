import React,{Component} from "react";

export default class Review extends Component{
    constructor(props){
        super(props)
        this.state = {
            review: (this.props.review
                      
                      )
            
          };
       
    }

    render(){
       
        let reviews = this.state.review;
        
        return(
         <p>**{reviews}**</p>
        )
    }
}