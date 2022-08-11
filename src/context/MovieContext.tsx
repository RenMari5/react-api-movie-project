import { createContext } from "react";
import { Movie } from '../types/movies';

interface MovieContextModel {
    movies: Movie[];
    addMovieToWatchList: (movie: Movie) => void;
    addMovieToFavList: (movie: Movie) => void;
    removeMovieFromWatchList: (id: number) => void;
    removeMovieFromFavList: (id: number) => void;

}

export const MovieContext = createContext<MovieContextModel>({
    movies: [],
    addMovieToWatchList: () => {},
    addMovieToFavList: () => {},
    removeMovieFromWatchList: () => {},
    removeMovieFromFavList: () => {}
});
