//search bar w three option of criteria to search by
import React, { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { Movie } from "../types/movies";

function SearchForm() {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=a756cffa90dee1edf6db15c8b94e2973&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovieList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    clearSearchValues();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setSearchTerm(e.target.value);
  }

  function clearSearchValues() {
    setSearchTerm("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Movies:
          <input
            type="text"
            name="search"
            placeholder="Enter Movie Title"
            value={searchTerm}
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit">Submit</input>
      </form>
    </div>
  );
}

export default SearchForm;
