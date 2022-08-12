//search bar w three option of criteria to search by
import React, { useState } from "react";
import { Movie } from "../types/movies";

function SearchForm() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

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
