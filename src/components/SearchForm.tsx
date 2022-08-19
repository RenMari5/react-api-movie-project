//search bar w three option of criteria to search by
import React, { useEffect, useState } from "react";
import { MovieResults, Movie } from "../types/movies";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


export function SearchForm() {
  const [movieList, setMovieList] = useState([]);
  // const [searchTerm, setSearchTerm] = useState(""); // commenting this out because we're using 3 different search terms (lines 17-19) - love ken
  const keys = ["genre_ids", "title", "poster_path"]
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [searchParams] = useSearchParams();
  // const [filterGenreParam, setFilterGenreParam] = useState(["All"]); // commenting out bcuz I think replaced with line 17, which may be a little cleaner? can change again - love ken

  // below 3 lines are states for search inputs - love ken
  const [genre, setGenre] = useState<string>('');
	const [rating, setRating] = useState<number>(10);
	const [title, setTitle] = useState<string>('');

  const search = (data: Movie[]) => {
    return data.filter(
      movie => keys.some(key => (movie: Movie)[keys].includes(searchTerm))
    )
  }

  useEffect(() => {
    // axios(
    //   "https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}"
    // )
    //   .then((res) => res.data())
    //   .then(
    //     (data) => {
    //       setIsLoaded(true);
    //       setMovieList(data);
    //     },
    //     (error) => {
    //       setError(error);
    //     }
    //   );

    const fetchMovies = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}`)
      setMovieList(res.data)
    }

    fetchMovies()

      }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // return movieList.filter((movie: Movie[]) => {
    //   if (movie.genre_ids === filterGenreParam) {
    //     return searchParams.filter((newMovie: any) => {
    //       return (
    //         movie[newMovie]
    //           .toString()
    //           .toLowerCase()
    //           .indexOf(searchTerm.toLowerCase()) > -1
    //       );
    //     });
    //   } else if (filterGenreParam == "All") {
    //     return searchParams.filter((newMovie: any) => {
    //         return (
    //           movie[newMovie]
    //                 .toString()
    //                 .toLowerCase()
    //                 .indexOf(searchTerm.toLowerCase()) > -1
    //  )
    // });

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

  // function serializeFormQuery() {} // commenting outbcuz i don't know what it is and we're not using it - love ken

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   return setSearchTerm(e.target.value);
  // } // idk if we'll need this anymore - love ken

  function clearSearchValues() {
    setGenre("");
    setRating(10);
    setTitle("");
  }

  return (
    <div className="wrapper">

      <div className="search-wrapper">
        <form onSubmit={handleSubmit}>
          <label>
              Search Movies:

                <input
						      type="range"
						      id="rating"
						      name="rating"
						      min= "0"
						      max= "10"
						      value={rating}
						      onChange={(e) => setRating(parseInt(e.target.value))}
						      // step="1" // this line was in some example code but idk if we need it - love ken
					      />
					      <label htmlFor="rating">Rating: (${rating})</label>

                <input
                  type="text" // changed type to 'text' from 'search' - love ken
                  name="title"
                  className="search-input"
                  placeholder="Enter Movie Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <select
                  onChange={(e: any) => setGenre(e.target.value)}
                  className="genre-select"
                  aria-label="Filter Movies by Genre"
                >
                    <option value="All">Filter by Genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animation">Animation</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Family">Family</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="History">History</option>
                    <option value="Horror">Horror</option>
                    <option value="Music">Music</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="TV Movie">TV Movie</option>
                    <option value="Thriller">Thriller</option>
                    <option value="War">War</option>
                    <option value="Western">Western</option>
                </select>

          </label>

          <input type="submit" value="Submit"/>
        </form>
      </div>

      <ul className="poster-grid">
        {movieList
          .filter((movie: Movie) => movie.title)
          .map((movie: Movie) => (
            <li key={movie.id} className="poster">
              {movie.title}{movie.poster_path}
            </li>
            // <li>
            //   <article className="poster" key={movie.id}>
            //     <div className="poster-image">
            //       <img src={movie.poster_path} alt={movie.title} />
            //     </div>
            //     <div className="movie">
            //       <h2 className="movie-title">{movie.title}</h2>
            //     </div>
            //   </article>
            // </li>
          ))}
      </ul>

    </div>
  );
}
