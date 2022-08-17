// each movie displays poster and on mouseover show buttons for add to watch list or add to liked
// this component is for iterating through array of movies and displaying images and titles in response to search params

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Movie } from "../types/movies";
import MovieOptions from "./MovieList";


// export const movieListing: Movie[] = [
//   {
//     title: "",
//     posterPath: "",
//   },
// ];

export default function MovieListItem(movie: Movie) { //i did change this component name to match the file name because I was getting confused with the difference, was can change it back tho if preferred! -ken
  const { moviesToWatch, moviesFavorited, addMovieToFavList, addMovieToWatchList, removeMovieFromFavList, removeMovieFromWatchList } = useContext(MovieContext);

  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.poster_path}</p>
      <button
        onClick={() => {
          MovieOptions;
        }}
      >
        Show More
      </button>
      {moviesFavorited.find((arrayItem) => arrayItem.id === movie.id) ? 
            <button onClick={() => addMovieToFavList(movie)}>favorited</button> :
            <button onClick={() => removeMovieFromFavList(movie.id)}>favorited</button>}
      {moviesToWatch.find((arrayItem) => arrayItem.id === movie.id) ? 
            <button onClick={() => addMovieToWatchList(movie)}>favorited</button> :
            <button onClick={() => removeMovieFromWatchList(movie.id)}>favorited</button>}
            {/* lines 31-36 are the buttons for the watch and favorite list - ternary operator should judge if a movie is on the list or not and change button function accordingly */}
    </div>
  );
}
