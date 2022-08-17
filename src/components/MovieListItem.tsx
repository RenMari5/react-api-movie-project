// each movie displays poster and on mouseover show buttons for add to watch list or add to liked
// this component is for iterating through array of movies and displaying images and titles in response to search params

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Movie } from "../types/movies";
import MovieOptions from "./MovieList";

interface Props {
  item: Movie;
}

const MovieListItem = ({ item }: Props) => {
  //i did change this component name to match the file name because I was getting confused with the difference, was can change it back tho if preferred! -ken
  const navigate = useNavigate();
  const {
    moviesToWatch,
    moviesFavorited,
    addMovieToFavList,
    addMovieToWatchList,
    removeMovieFromFavList,
    removeMovieFromWatchList,
  } = useContext(MovieContext);

  return (
    <div>
      <p>{item.title}</p>
      <p>{item.poster_path}</p>
      <button
        onClick={() => {
          // navigate(``);
        }}
      >
        Show More
      </button>
      {moviesFavorited.find((arrayItem) => arrayItem.id === item.id) ? (
        <button onClick={() => addMovieToFavList(item)}>favorited</button>
      ) : (
        <button onClick={() => removeMovieFromFavList(item.id)}>
          favorited
        </button>
      )}
      {moviesToWatch.find((arrayItem) => arrayItem.id === item.id) ? (
        <button onClick={() => addMovieToWatchList(item)}>favorited</button>
      ) : (
        <button onClick={() => removeMovieFromWatchList(item.id)}>
          favorited
        </button>
      )}
      {/* lines 31-36 are the buttons for the watch and favorite list - ternary operator should judge if a movie is on the list or not and change button function accordingly */}
    </div>
  );
};
function useNavigate() {
  throw new Error("Function not implemented.");
}
