import Header from './components/Header';
import Footer from './components/Footer.jsx'
import MoviesGrid from './components/MoviesGrid.jsx';
import  Watchlist from'./components/Watchlist.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import './styles.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [watchlist,setWatchlist]= useState([])
  useEffect(() => {
    fetch("./movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []); //componentDidMount
  const toggleWatchlist=(movieID)=>{
    setWatchlist(prev=>prev.includes(movieID)
    ? prev.filter(id=>id!==movieID)
    : [...prev,movieID])
  }
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <Router>
          <nav>
            <ul>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/watchlist'>Watchlist</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<MoviesGrid movies={movies}/>} />
            <Route path='/watchlist' element={<Watchlist/>}/>
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
