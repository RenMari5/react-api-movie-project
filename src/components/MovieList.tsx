// displays icons and description for each movie shown
import { useEffect, useState } from "react";
import fetchMovies from "../services/movie.service";
import { MovieContext } from "../context/MovieContext";
import { MovieContextProvider } from "../context/MovieContextProvider";
import { Movie } from "../types/movies";
import { MovieListItem } from "./MovieListItem";
// import MovieListItem from "./MovieListItem";

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
      //map--where we are fetching all the data
      {movies.map((item, index) => (
        <MovieListItem item={item} key={index} />
      ))}
    </div>
  );
}
