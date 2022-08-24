// each movie displays poster and on mouseover show buttons for add to watch list or add to liked
// this component is for iterating through array of movies and displaying images and titles in response to search params

import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { Movie } from "../types/movies";
import { useNavigate } from "react-router-dom";

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
      <p>{item.title}</p>
      <p
        onClick={goToDetails}
      >
        <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt="poster" />
      </p>

      {moviesFavorited.find((arrayItem) => arrayItem.id === item.id) ? (
        <button onClick={() => addMovieToFavList(item)} value="add to favorites" />
      ) : (
        <button onClick={() => removeMovieFromFavList(item.id)} value="remove from favorites" />
      )}
      {moviesToWatch.find((arrayItem) => arrayItem.id === item.id) ? (
        <button onClick={() => addMovieToWatchList(item)} value= "add to watch list" /> 
      ) : (
        <button onClick={() => removeMovieFromWatchList(item.id)} value="remove from watch list" />
      )}
      {/* lines 31-36 are the buttons for the watch and favorite list - ternary operator should judge if a movie is on the list or not and change button function accordingly */}
    </div>
  );
};
