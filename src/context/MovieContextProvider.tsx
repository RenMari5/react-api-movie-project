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

    useEffect(() => {
        fetchMovies().then((response) => setMovies(response.data.results));
        console.log(movies);
      }, [])

    function addMovieToWatchList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesToWatch]);
    }

    function addMovieToFavList(movie: Movie) {
        setMoviesToWatch([movie, ...moviesFavorited]);
    }
  
    function removeMovieFromWatchList(id: number) {
        const index = moviesToWatch.findIndex((movie) => movie.id === id);
        let newArray = moviesToWatch.slice(0)
        newArray.splice(index, 1)
        setMoviesToWatch(newArray);
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