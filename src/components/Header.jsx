import React from 'react'
import '../styles.css'

export default function Header (){
    return(
        <div className="Header">
            <img src="./logo.png" alt="moviedux" className="Logo" />
            <h2 className="app-subtitle">Time for Popcorn</h2>
        </div>
    )
}
