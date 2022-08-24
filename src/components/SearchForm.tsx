//search bar w three option of criteria to search by
import React, { useEffect, useState } from "react";
import "./SearchForm.css";

export function SearchForm() {
  const [genre, setGenre] = useState<number>();
  const [rating, setRating] = useState<number>(10);
  const [title, setTitle] = useState<string>("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const queryStringParams: any = {};
    if (genre) {
      queryStringParams.genre = genre;
    }
    if (rating) {
      queryStringParams.rating = rating;
    }
    if (title) {
      queryStringParams.releaseDate = title;
    }

    clearSearchValues();
  }

  function clearSearchValues() {
    setGenre(0);
    setRating(10);
    setTitle("");
  }

  return (
    <div className="SearchForm">
      <div className="search-wrapper">
        <form onSubmit={handleSubmit} className="search-form">
          <header className="searchTitle">Search Movies: </header>
          <label htmlFor="rating" className="searchLabel">
            Rating up to: {rating}
          </label>
          <input
            className="searchRadio"
            type="range"
            id="rating"
            name="rating"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
          <select
            onChange={(e: any) => setGenre(e.target.value)}
            className="genre-select"
            aria-label="Filter Movies by Genre"
          >
            <option value="All">Filter by Genre</option>
            <option value="28">Action (28)</option>
            <option value="Adventure">Adventure (12)</option>
            <option value="Animation">Animation (16)</option>
            <option value="Comedy">Comedy (35)</option>
            <option value="Crime">Crime (80)</option>
            <option value="Documentary">Documentary (99)</option>
            <option value="Drama">Drama (18)</option>
            <option value="Family">Family (10751)</option>
            <option value="Fantasy">Fantasy (14)</option>
            <option value="History">History (36)</option>
            <option value="Horror">Horror (27)</option>
            <option value="Music">Music (10402)</option>
            <option value="Mystery">Mystery (9648)</option>
            <option value="Romance">Romance (10749)</option>
            <option value="Science Fiction">Science Fiction (878)</option>
            <option value="TV Movie">TV Movie (10770)</option>
            <option value="Thriller">Thriller (53)</option>
            <option value="War">War (10752)</option>
            <option value="Western">Western (37)</option>
            {/* we need to set option values to the correct genre_id numbers */}
          </select>
          <input
            type="text" // changed type to 'text' from 'search' - love ken
            name="title"
            className="search-input"
            placeholder="Enter Movie Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="submitButton">Lights... Camera... Action!</button>
        </form>
      </div>
    </div>
  );
}
