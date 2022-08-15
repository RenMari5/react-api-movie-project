import { createContext } from "react";
import { Movie } from '../types/movies';

interface MovieContextModel {
    movies: Movie[];
    addMovieToWatchList: (movie: Movie) => void;
    addMovieToFavList: (movie: Movie) => void;
    removeMovieFromWatchList: (id: number, movie: Movie) => void;
    removeMovieFromFavList: (id: number, movie: Movie) => void;

}

export const MovieContext = createContext<MovieContextModel>({
    movies: [],
    addMovieToWatchList: () => {},
    addMovieToFavList: () => {},
    removeMovieFromWatchList: () => {},
    removeMovieFromFavList: () => {}
});
