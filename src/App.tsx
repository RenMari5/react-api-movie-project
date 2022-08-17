import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchForm />
        <MovieList />
      </header>
    </div>
  );
}

export default App;
