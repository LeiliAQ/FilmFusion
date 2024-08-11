import React from 'react'
import {useState,useEffect} from 'react'
import './MovieCard'
import MovieCard from './MovieCard'
export default function MoviesGrid() {
    const [movies,setMovies]=useState([])
    const[searchTerm,setsearchterm]=useState('')
    useEffect(()=>{
        fetch("./movies.json")
        .then(res=>res.json())
        .then(data=>setMovies(data))
        
    },[])//componentDidMount
    const doSearch=(event)=>{
      setsearchterm(event.target.value)
    }
    const filteredMovies=movies.filter(movie=>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    return(
        
        <div>
            <input type='text' className='search-input' placeholder='Search Movies...'
            value={searchTerm}
            onChange={doSearch}
            />
            <div className="movies-grid">
               {
                filteredMovies.map(movie=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))
               }
            </div>
        </div>
    )
}