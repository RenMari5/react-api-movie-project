import "./App.css";
import { SearchForm } from "./components/SearchForm";
import MovieList from "./components/MovieList";
import { Link, Route, Routes } from "react-router-dom";
import FavoritesList from "./components/FavoritesList";
import WatchList from "./components/WatchList";
import MovieDetail from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
        <h1>Hey there, movie watcher!</h1>
          <Link to={`/`}>Home</Link>
          <Link to={`/favoriteslist}`}>Your Favorites List</Link>
          <Link to={`/watchlist}`}>Your Watch List</Link>
        </div>
        
        <Routes>
          <Route path='/' element={
              <div>
                <SearchForm />
                <MovieList />
              </div>
            } />
          <Route path='/favoriteslist' element={<FavoritesList />} />
          <Route path='/watchlist' element={<WatchList />} />
          <Route path='/details/:id' element={<MovieDetail />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
