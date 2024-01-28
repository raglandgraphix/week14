export default class RandomProfileService {
    constructor(url){
        this.url = 'https://65b2114c9bfb12f6eafcb9f9.mockapi.io/:endpoint';
        
    }
    
  all(){
    fetch('https://65b2114c9bfb12f6eafcb9f9.mockapi.io/movieReview')
    
      .then(response =>response.json())
      .then(data => {
        
           return data.map((movie)=>{
                return {
                    movieName:movie.movieName,
                    rating:movie.rating,
                    review:movie.review,
                    poster:movie.poster,
                    id:movie.id
                }
            })
        
       
        
      })
      .catch(error => {
        console.log('oops');
      })
    
    //let url = this.url;
        //fetch(url).then((res)=>res.json())
            //.then((data) =>{
                //console.log(data);
                // return data.map((movies)=>{
                //     return{
                //         movieName:movies.movieName,
                //         rating:movies.rating,
                //         review:movies.review,
                //         poster:movies.poster,
                //         id:movies.id
                //     }
                // });
           // });
    }
}