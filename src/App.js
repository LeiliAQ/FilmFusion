import Header from './components/Header';
import Footer from './components/Footer.jsx'
import MoviesGrid from './components/MoviesGrid.jsx';
import  Watchlist from'./components/Watchlist.jsx'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import './styles.css'

function App() {
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
            <Route path='/' element={<MoviesGrid/>} />
            <Route path='/watchlist' element={<Watchlist/>}/>
          </Routes>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
