import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../services/movie.service";
import { Movie } from "../types/movies";
import { MovieListItem } from "./MovieListItem";

export default function MovieOptions() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    fetchMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
    });
  }, []);

  let filteredMovies = [...movies];

  console.log(filteredMovies);

  if (query.get("genre")) {
    console.log(query.get("genre"));
    filteredMovies = filteredMovies.filter(
      (movie) => movie.genre_ids.includes(query.get("genre")!) // this is throwing an error becuase movies.tsx has genre type set as a number, we can set the option values in SearchForm to id numbers corresponding to genre names to resolve this error
    );
  }
  if (query.get("rating")) {
    console.log(query.get("rating"));
    filteredMovies = filteredMovies.filter(
      (movie) => movie.popularity < parseInt(query.get("rating")!)
    );
  }
  if (query.get("title")) {
    console.log(query.get("title"));
    filteredMovies = filteredMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.get("title")!)
    );
  }

  return (
    <div>
      {filteredMovies.map((item) => (
        <MovieListItem item={item} key={item.id} />
      ))}
    </div>
  );
}
