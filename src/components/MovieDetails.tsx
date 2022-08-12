// this component for when user clicks more on movielist to see full details for a movie on a separate page

import { Movie } from "../types/movies";
import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

type RouteParams = {
    id: string;
}

export default function MovieDetail () {
    // onClick on poster in movie list to bring it to this page by id
    // <Route path="/details/:id" element={<MovieDetail movie={movie.id} />} /> or something like it

    const { id } = useParams<RouteParams>();
    const { movies, moviesToWatch, moviesFavorited } = useContext(MovieContext);
    const detailedMovie: Movie | undefined = movies.find((movie) => movie.id === id);

    function isOnWatchList () {
        
    }
    // function isOnFavList? // have a toggle button that darkens/lightens based on this functions

    return (
    <div className="MovieRoute">
        <p>{detailedMovie?.title}</p>
        <img src={`${detailedMovie?.posterPath}`} alt='movie poster' />
        <p>{detailedMovie?.overview}</p>
        <p>Released: {detailedMovie?.releaseDate}</p>
        <p>Popularity: ${detailedMovie?.popularity}</p>
        <button>favorited</button>
        <button>to watch</button>
    </div>
    )

    function useParams<T>(): { id: any; } {
        throw new Error("Function not implemented.");
    }

}


