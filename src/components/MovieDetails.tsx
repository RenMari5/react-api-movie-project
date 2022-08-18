import { Movie } from "../types/movies";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import fetchMovies from "../services/movie.service";
 
interface RouteParams {
    id: string;
}

export default function MovieDetail () {
    // onClick on poster in movie list to bring it to this page by id
    // <Link to={`/details/${item.id}`}>details</Link> on movie items to link to details page
    const { id } = useParams<RouteParams>();
    const { moviesToWatch, moviesFavorited, addMovieToFavList, addMovieToWatchList, removeMovieFromFavList, removeMovieFromWatchList } = useContext(MovieContext); //do we need to use MovieContextProvider?
    const [movies, setMovies] = useState<Movie[]>([]);
    const movie: Movie = movies.find((movie) => movie.id === id);

    useEffect(() => {
      fetchMovies().then((movies) => {
        console.log(movies);
        setMovies(movies);
      });
    }, []);
    
    return (
    <div className="MovieRoute">
        <p>{movie?.title}</p>
        <img src={`${movie?.poster_path}`} alt='movie poster' />
        <p>{movie?.overview}</p>
        <p>Released: {movie?.release_date}</p>
        <p>Popularity: ${movie?.popularity}</p>
        {moviesFavorited.find((movie) => movie.id === id) ? 
            <button onClick={() => addMovieToFavList(movie)}>favorited</button> :
            <button onClick={() => removeMovieFromFavList(id)}>favorited</button>}
        {moviesToWatch.find((movie) => movie.id === id)  ? 
            <button onClick={() => addMovieToWatchList(movie)}>favorited</button> :
            <button onClick={() => removeMovieFromWatchList(id)}>favorited</button>} 
            </div>
    )

    function useParams<T>(): { id: any; } {
        throw new Error("Function not implemented.");
    }
}