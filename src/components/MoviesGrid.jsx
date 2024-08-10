import React from 'react'
import {useState,useEffect} from 'react'
import './MovieCard'
import MovieCard from './MovieCard'
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
                    <MovieCard movie={movie} key={movie.id}/>
                ))
               }
            </div>
        </div>
    )
}