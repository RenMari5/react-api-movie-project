import { useState } from "react";
import { Movie } from "../types/movies";
import { MovieContext } from "./MovieContext";

interface Props {
  children: React.ReactNode;
}

export function MovieContextProvider({ children }: Props) {
  const [moviesToWatch, setMoviesToWatch] = useState<Movie[]>([]);
  const [moviesFavorited, setMoviesFavorited] = useState<Movie[]>([]);

  function addMovieToWatchList(movie: Movie) {
    setMoviesToWatch([movie, ...moviesToWatch]);
  }

  function addMovieToFavList(movie: Movie) {
    setMoviesToWatch([movie, ...moviesFavorited]);
  }

  function removeMovieFromWatchList(id: number) {
    const index = moviesToWatch.findIndex((movie: Movie) => movie.id === id);
    let newArray = moviesToWatch.slice(0);
    newArray.splice(index, 1);
    setMoviesToWatch(newArray);
  }

  function removeMovieFromFavList(id: number) {
    const index = moviesFavorited.findIndex((movie) => movie.id === id);
    let newArray = moviesFavorited.slice(0);
    newArray.splice(index, 1);
    setMoviesFavorited(newArray);
  }

  return (
    <MovieContext.Provider
      value={{
        moviesFavorited,
        moviesToWatch,
        addMovieToWatchList,
        addMovieToFavList,
        removeMovieFromWatchList,
        removeMovieFromFavList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
