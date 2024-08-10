import React from 'react'
import {useState,useEffect} from 'react'

export default function MoviesGrid() {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        fetch("./movies.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
        
    },[])//componentDidMount
    return(
        
        <div>
            <div className="movies-grid">
               {
                movies.map(movie=>(
                    <div key={movie.id} className="movie-card">
                        <img src={`./images/${movie.image}`} alt="" className="movie_image"/>
                        <div className="movie-card-info">
                            <h3 className="movie-card-info">{movie.title}</h3>
                            <p className="movie-card-genre">{movie.genre}</p>
                            <p className="movie-card-rating">{movie.rating}</p>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
    )
}