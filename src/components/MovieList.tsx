import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../services/movie.service";
import { Movie } from "../types/movies";
import { MovieListItem } from "./MovieListItem";
import "../css/MovieList.css";

export default function MovieOptions() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    fetchMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
    });
  }, []);

  let filteredMovies: Movie[] = movies;

  console.log('filteredMovies:' + filteredMovies);

  if (query.get("genre")) {
    console.log(query.get("genre"));
      filteredMovies = filteredMovies.filter(
        (movie) => {
          let idsArray = movie.genre_ids;
          // idsArray.includes(query.get("genre")!)
        })
    console.log('genre filter:' + query.get("genre") + filteredMovies);
  }

  if (query.get("rating")) {
    console.log(query.get("rating"));
    filteredMovies = filteredMovies.filter(
      (movie) => movie.vote_average <= parseInt(query.get("rating")!)
    );
    console.log('rating filter:' + query.get("rating") + filteredMovies);
  }

  if (query.get("title")) {
    console.log(query.get("title"));
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.get("title")!)
    );
    console.log('title filter:' + query.get("title") + filteredMovies);
  }

  return (
    <div className="MovieList">
      {filteredMovies.map((item) => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </div>
  );
}
