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
    fetch("")
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
    <div className="wrapper">
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
    </div>
  );
}

export default SearchForm;
