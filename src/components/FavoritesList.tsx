import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Movie } from "../types/movies";
import { MovieListItem } from "./MovieListItem";

export default function WatchList() {
    //<Link to={`/favoriteslist}`}>Favorites List</Link>

  const { moviesFavorited } = useContext(MovieContext); //do we need to use MovieContextProvider?

  return (
  <div>
      <h1>your favorite movies:</h1>
    {moviesFavorited.map((movie: Movie) => (
      <MovieListItem item={movie} key={movie.id} />
      // do we want to remove fav and watch list buttons from MovieListItem and display them in map on list pages? 
    ))}
  </div>
  )
}