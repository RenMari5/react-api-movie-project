//search bar w three option of criteria to search by
import React, { useEffect, useState } from "react";
import { MovieResults, Movie } from "../types/movies";
import axios from "axios";

function SearchForm() {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParam] = useState([]);
  const [filterGenreParam, setFilterGenreParam] = useState(["All"]);

  useEffect(() => {
    axios(
      "https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}"
    )
      .then((res) => res.data())
      .then(
        (data) => {
          setIsLoaded(true);
          setMovieList(data);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // return movieList.filter((movie: Movie[]) => {
    //   if (movie.genre_ids === filterGenreParam) {
    //     return searchParam.some((newMovie: any) => {
    //       return (
    //         movie[newMovie]
    //           .toString()
    //           .toLowerCase()
    //           .indexOf(searchTerm.toLowerCase()) > -1
    //       );
    //     });
    //   } else if (filterGenreParam == "All") {
    //     return searchParam.some((newMovie) => {
    //         return (
    //           movie[newMovie]
    //                 .toString()
    //                 .toLowerCase()
    //                 .indexOf(searchTerm.toLowerCase()) > -1
    // });
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
      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
            Search Movies:
            <input
              type="search"
              name="search-form"
              className="search-input"
              placeholder="Enter Movie Title"
              value={searchTerm}
              onChange={handleChange}
            />
            <select
              onChange={(e: any) => {
                setFilterGenreParam(e.target.value);
              }}
              className="genre-select"
              aria-label="Filter Movies by Genre"
            >
              <option value="All">Filter by Genre</option>
              <option value="Romantic Comedy">Romantic Comedy</option>
              <option value="Horror">Horror</option>
              <option value="Comedy">Comedy</option>
              <option value="Action">Action</option>
              <option value="Drama">Drama</option>
              <option value="Indie">Indie</option>
            </select>
          </label>
          <input type="submit">Submit</input>
        </form>
      </div>
      <ul className="poster-grid">
        {movieList.map((movie: any) => (
          <li>
            <article className="poster" key={movie.id}>
              <div className="poster-image">
                <img src={movie.poster_path} alt={movie.title} />
              </div>
              <div className="movie">
                <h2 className="movie-title">{movie.title}</h2>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchForm;
