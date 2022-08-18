import { Movie } from "../types/movies";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import { fetchMovie } from "../services/movie.service";
import { useParams } from "react-router-dom";
 

export default function MovieDetail () {
    // onClick on poster in movie list to bring it to this page by id
    // <Link to={`/details/${item.id}`}>details</Link> on movie items to link to details page
    const { id } = useParams();
    const { moviesToWatch, moviesFavorited, addMovieToFavList, addMovieToWatchList, removeMovieFromFavList, removeMovieFromWatchList } = useContext(MovieContext); //do we need to use MovieContextProvider?
    const [movies, setMovies] = useState<Movie[]>([]);
    const movie = movies.find((movie) => movie.id === Number(id));

    useEffect(() => {
      fetchMovie(id as string).then((movies) => {
        console.log(movies);
        setMovies(movies);
      });
    }, [id]);
    
    return (
        <div>
            {/* { movie !== undefined?
            //     <div className="MovieRoute">
            //         <p>{movie.title}</p>
            //         <img src={`${movie.poster_path}`} alt='movie poster' />
            //         <p>{movie.overview}</p>
            //         <p>Released: {movie.release_date}</p>
            //         <p>Popularity: ${movie.popularity}</p>
            //         {moviesFavorited.find((movie) => movie.id === Number(id)) ? 
            //             <button onClick={() => addMovieToFavList(movie)}>favorited</button> :
            //             <button onClick={() => removeMovieFromFavList(Number(id))}>favorited</button>}
            //         {moviesToWatch.find((movie) => movie.id === Number(id))  ? 
            //             <button onClick={() => addMovieToWatchList(movie)}>favorited</button> :
            //             <button onClick={() => removeMovieFromWatchList(Number(id))}>favorited</button>} 
            //     </div> :
            // <p>oops! please retry</p>
            } */}
        </div>
    )}