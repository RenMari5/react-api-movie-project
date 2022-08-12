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
    const [isOnWatchList, setIsOnWatchList] = useState(false);
    const [isOnFavList, setIsOnFavList] = useState(false);

    useEffect(() => {
        fetchMovies().then((response) => setMovies(response.data.results));
        console.log(movies);
      }, [])

    function isFavorited (movie: Movie) {
        // have the function set the isOnFavList based on whether or not its on the list
    }

    function isToWatch (movie: Movie) {
        // have the function set the isOnFavList based on whether or not its on the list
    }

    function addMovieToWatchList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesToWatch]);
        setIsOnWatchList(true); // do we want to keep it this way or do we need another function??
    }

    function addMovieToFavList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesFavorited]);
    }
  
    function removeMovieFromWatchList(id: number) {
        const index = moviesToWatch.findIndex((movie) => movie.id === id);
        let newArray = moviesToWatch.slice(0)
        newArray.splice(index, 1)
        setMoviesToWatch(newArray);
        setIsOnWatchList(false);// do we want to keep it this way or do we need another function??
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