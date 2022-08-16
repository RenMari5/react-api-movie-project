import axios from "axios";
import { Movie, MovieResults } from "../types/movies";

export default function fetchMovies() {
  return axios
    .get<MovieResults>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}`
    )
    .then((response) => response.data.results);
}
