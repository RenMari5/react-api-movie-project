//search bar w three option of criteria to search by

import React, { ChangeEvent, useState } from "react";
import { Movie } from "../types/movies";

function SearchForm() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    clearSearchValues();
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    return setMovieList({ title: e.target.value });
  }

  function clearSearchValues() {
    setMovieList({ title: "" });
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
            value={movieList.title}
            onChange={handleChange}
          ></input>
        </label>
        <input type="submit" name="submit"></input>
      </form>
    </div>
  );
}

export default SearchForm;
