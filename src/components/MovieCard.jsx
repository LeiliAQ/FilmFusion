import React from "react";

export default function MovieCard({ movie,isWatchlisted,toggleWatchlist }) {
    const getRatingClass=(rating)=>{
        if(rating>=8){
            return 'rating-good'
        }
        else if(rating>=5){
            return 'rating-ok'
        }
        else{
            return 'rating-bad'
        }
    }
  // error handler
  const imageErrorHandler = (event) => {
    event.target.src = "images/default.jpg";
  };
  return (
    <div key={movie.id} className="movie-card">
      <img src={`./images/${movie.image}`} alt="" className="movie_image" 
      onError={imageErrorHandler}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-info">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>{movie.rating}</p>
      </div>
    </div>
  );
}
