import React from "react";
import { useState} from "react";
import "./MovieCard";
import MovieCard from "./MovieCard";
export default function MoviesGrid({movies}) {
  
  const [searchTerm, setsearchterm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All");
  
  const doSearch = (event) => {
    setsearchterm(event.target.value);
  };

  const matchGenre=(movie)=>{
    return genre==="All Genres" ||
    movie.genre.toLowerCase()===genre.toLowerCase()
  }
  const matchRating=(movie)=>{
    switch(rating){
      case "All":
        return true
      case "Good":
        return movie.rating>=8
      case "OK":
        return movie.rating<8 && movie.rating>=5
      case "Bad":
          return movie.rating<5
      default:
        return false
    }
  }
  const matchSearchTerm = (movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };
  const filteredMovies = movies.filter(
    (movie) => matchGenre(movie) && matchRating(movie) && matchSearchTerm(movie)
  );
  const genreHandler = (event) => {
    setGenre(event.target.value);
  };
  const ratingHandler = (event) => {
    setRating(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={doSearch}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            id=""
            className="filter-dropdown"
            value={genre}
            onChange={genreHandler}
          >
            <option value="All Genres">All Genres</option>
            <option value="Action">Action</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
          </select>
        </div>
        <div className="filter-slot">
          <label htmlFor="rating">Rating</label>
          <select
            name="rating"
            id=""
            className="filter-dropdown"
            value={rating}
            onChange={ratingHandler}
          >
            <option value="All">All</option>
            <option value="Good">Good</option>
            <option value="OK">OK</option>
            <option value="Bad">Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
