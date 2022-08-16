// this component for when user clicks more on movielist to see full details for a movie on a separate page

import { Movie } from "../types/movies";
import { movies } from "./MovieList"
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
 
interface RouteParams {
    id: string;
}

export default function MovieDetail () {
    // onClick on poster in movie list to bring it to this page by id
    // <Route path="/details/:id" element={<MovieDetail movie={movie.id} />} /> or something like it
    const { id } = useParams<RouteParams>();
    const { moviesToWatch, moviesFavorited, addMovieToFavList, addMovieToWatchList, removeMovieFromFavList, removeMovieFromWatchList } = useContext(MovieContext);
    const detailedMovie: Movie = movies.find((movie) => movie.id === id);

    return (
    <div className="MovieRoute">
        <p>{detailedMovie.title}</p>
        <img src={`${detailedMovie.posterPath}`} alt='movie poster' />
        <p>{detailedMovie.overview}</p>
        <p>Released: {detailedMovie.releaseDate}</p>
        <p>Popularity: ${detailedMovie.popularity}</p>
        {movies.find((movie) => movie.id === id) ? 
            <button onClick={() => addMovieToFavList(detailedMovie)}>favorited</button> :
            <button onClick={() => removeMovieFromFavList(id, detailedMovie)}>favorited</button>}
        {detailedMovie.isOnWatchList ? 
            <button onClick={() => addMovieToWatchList(detailedMovie)}>favorited</button> :
            <button onClick={() => removeMovieFromWatchList(id, detailedMovie)}>favorited</button>}
        
    </div>
    )

    function useParams<T>(): { id: any; } {
        throw new Error("Function not implemented.");
    }

}


