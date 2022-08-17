// each movie displays poster and on mouseover show buttons for add to watch list or add to liked
// this component is for iterating through array of movies and displaying images and titles in response to search params

import { Movie } from "../types/movies";
import MovieOptions from "./MovieList";

// export const movieListing: Movie[] = [
//   {
//     title: "",
//     posterPath: "",
//   },
// ];

export default function movieListing(movie: Movie) {
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
    </div>
  );
}
