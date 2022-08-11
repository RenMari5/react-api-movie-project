import { createContext } from "react";
import { MoviesList } from '../components/MovieList'

interface MovieContextModel {
    movies: MoviesList[];
    addMovieToWatchList: (movie: MoviesList) => void;
    addMovieToFavsList: (movie: MoviesList) => void;
    removeItemFromWatchList: (id: string) => void;
    removeItemFromFavsList: (id: string) => void;

}

export const OrderContext = createContext<MenuContextModel>({
    movies: [],
    addMovieToWatchList: () => {};
    addMovieToFavsList: () => {};
    removeItemFromWatchList: () => {};
    removeItemFromFavsList: () => {};
});
