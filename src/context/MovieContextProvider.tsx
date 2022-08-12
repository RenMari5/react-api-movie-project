import { useEffect, useState } from 'react';
import fetchMovies from '../services/movie.service';
import { Movie } from '../types/movies';
import { MovieContext } from './MovieContext';

interface Props {
    children: React.ReactNode;
}

export function MovieContextProvider ({ children }: Props) {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [moviesToWatch, setMoviesToWatch] = useState<Movie[]>([]);
    const [moviesFavorited, setMoviesFavorited] = useState<Movie[]>([]);
    // const [isOnWatchList, setIsOnWatchList] = useState(false);
    // const [isOnFavList, setIsOnFavList] = useState(false);
    // might need to add properties to Movie objects with .defineProperty() in order to properly have function for the last two 

    useEffect(() => {
        fetchMovies().then((response) => setMovies(response.data.results));
        console.log(movies);
      }, [])

    // function isFavorited (movie: Movie) {
    //     // have the function set the isOnFavList based on whether or not its on the list
    // }

    // function isToWatch (movie: Movie) {
    //     // have the function set the isOnFavList based on whether or not its on the list
    // }

    function addMovieToWatchList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesToWatch]);
        // setIsOnWatchList(true); // do we want to keep it this way or do we need another function??
        movie.isOnWatchList = true;
    }

    function addMovieToFavList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesFavorited]);
    }
  
    function removeMovieFromWatchList(id: number) {
        const index = moviesToWatch.findIndex((movie) => movie.id === id);
        const movie = moviesToWatch.find((movie) => movie.id === id);
        let newArray = moviesToWatch.slice(0)
        newArray.splice(index, 1)
        setMoviesToWatch(newArray);
        movie.isOnWatchList = false; // gotta figure this out here, how to locate the object as a Movie ?
    }

    function removeMovieFromFavList(id: number) {
        const index = moviesFavorited.findIndex((movie) => movie.id === id);
        let newArray = moviesFavorited.slice(0)
        newArray.splice(index, 1)
        setMoviesFavorited(newArray);
    }
  
    return (
        <MovieContext.Provider 
        value={{
            movies, 
            addMovieToWatchList, 
            addMovieToFavList, 
            removeMovieFromWatchList,
            removeMovieFromFavList
            }}>
            {children}
        </MovieContext.Provider>
    )
  
  }