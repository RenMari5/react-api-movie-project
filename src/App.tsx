import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";

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
