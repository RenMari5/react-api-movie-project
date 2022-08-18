import axios from "axios";
import { config } from "../config";
import { Movie, MovieResults } from "../types/movies";

export function fetchMovies() {
  return axios
    .get<MovieResults>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}`
    )
    .then((response) => response.data.results);
}

export function fetchMovie (id: string) {
  return axios
  .get<MovieResults>(
    `https://api.themoviedb.org/3/${id}?api_key=${config.apiKey}&language=en-US&external_source=imdb_id`
  )
  .then((response) => response.data.results);
}