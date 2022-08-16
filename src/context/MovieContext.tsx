import { createContext } from "react";
import { Movie } from '../types/movies';

interface MovieContextModel {
    moviesFavorited: Movie[];
    moviesToWatch: Movie[];
    addMovieToWatchList: (movie: Movie) => void;
    addMovieToFavList: (movie: Movie) => void;
    removeMovieFromWatchList: (id: number) => void;
    removeMovieFromFavList: (id: number) => void;

}

export const MovieContext = createContext<MovieContextModel>({
    moviesFavorited: [],
    moviesToWatch: [],
    addMovieToWatchList: () => {},
    addMovieToFavList: () => {},
    removeMovieFromWatchList: () => {},
    removeMovieFromFavList: () => {}
});
