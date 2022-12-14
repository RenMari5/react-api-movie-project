import { Movie } from "../types/movies";
import { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import { fetchMovies } from "../services/movie.service";
import { useParams } from "react-router-dom";

interface MovieDetailProps {
  children?: React.ReactNode;
}

export default function MovieDetail({ children }: MovieDetailProps) {
  // onClick on poster in movie list to bring it to this page by id
  // <Link to={`/details/${item.id}`}>details</Link> on movie items to link to details page
  const { id } = useParams();
  const {
    moviesToWatch,
    moviesFavorited,
    addMovieToFavList,
    addMovieToWatchList,
    removeMovieFromFavList,
    removeMovieFromWatchList,
  } = useContext(MovieContext); //do we need to use MovieContextProvider?
  const [movies, setMovies] = useState<Movie[]>([]);
  const movie = movies.find((movie) => movie.id === Number(id));

  useEffect(() => {
    fetchMovies().then((movies) => {
      console.log(movies);
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      {children}
      {movie !== undefined ? (
        <div className="MovieRoute">
          <p>{movie.title}</p>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.title} poster`} />
          <p>{movie.overview}</p>
          <p>Released: {movie.release_date}</p>
          <p>Popularity: ${movie.vote_average}</p>
          <button onClick={() => addMovieToWatchList(movie)}>add to watch list</button> 
        <button onClick={() => removeMovieFromWatchList(movie.id)}>remove from watch list</button>
        </div>
      ) : (
        <p>oops! please retry</p>
      )}
    </div>
  );
}
