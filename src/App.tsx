import "./App.css";
import { SearchForm } from "./components/SearchForm";
import MovieList from "./components/MovieList";
import { Link, Route, Routes } from "react-router-dom";
import WatchList from "./components/WatchList";
import MovieDetail from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <h1 className="Title">
            Hey there, Movie Watcher! Welcome to the ARK Movie Database!
          </h1>
          <Link to={`/`} className="navlinks">
            Home
          </Link>
          <Link to={`/watchlist`} className="navlinks">
            Your Watch List
          </Link>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <SearchForm />
              <MovieList />
            </div>
          }
        />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
