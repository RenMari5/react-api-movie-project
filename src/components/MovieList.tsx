import { useEffect, useState } from "react";
import { fetchMovies } from "../services/movie.service";
// import { MovieContext } from "../context/MovieContext";
// import { MovieContextProvider } from "../context/MovieContextProvider";
import { Movie } from "../types/movies";
import { MovieListItem } from "./MovieListItem";

export default function MovieOptions() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetchMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      {movies.map((item, index) => (
        <MovieListItem item={item} key={index} />
      ))}
    </div>
  );
}
