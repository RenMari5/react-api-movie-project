// each movie displays poster and on mouseover show buttons for add to watch list or add to liked
// this component is for iterating through array of movies and displaying images and titles in response to search params

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Movie } from "../types/movies";
import { useNavigate } from "react-router-dom";
import "../css/MovieListItem.css";


interface Props {
  item: Movie;
}

export const MovieListItem = ({ item }: Props) => {
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/details/${item.id}`);
  }

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
      <p onClick={goToDetails}>{item.title}</p>
        <img onClick={goToDetails} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster" />
        <button onClick={() => addMovieToWatchList(item)}>add to watch list</button> 
        <button onClick={() => removeMovieFromWatchList(item.id)}>remove from watch list</button>
    </div>
  );
};
