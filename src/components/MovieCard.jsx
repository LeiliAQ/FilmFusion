import React from "react";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 5) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };
  // error handler
  const imageErrorHandler = (event) => {
    event.target.src = "images/default.jpg";
  };
  return (
    <div className="movie-card">
      <img
        src={`./images/${movie.image}`}
        alt=""
        className="movie_image"
        onError={imageErrorHandler}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-info">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
        <label htmlFor="" className="switch">
          <input
            type="checkbox"
            checked={isWatchlisted}
            onChange={() => {
              console.log("Checkbox clicked");
              toggleWatchlist(movie.id);
            }}
          />
          <span className="slider">
            <span className="slider-label">
              {isWatchlisted ? "In watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
