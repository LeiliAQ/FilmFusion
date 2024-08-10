import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div key={movie.id} className="movie-card">
      <img src={`./images/${movie.image}`} alt="" className="movie_image" />
      <div className="movie-card-info">
        <h3 className="movie-card-info">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className="movie-card-rating">{movie.rating}</p>
      </div>
    </div>
  );
}
