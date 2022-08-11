import axios from 'axios';
import { Movie } from '../types/movies';

export default function fetchMovies() {
    return axios
    .get(`https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}`)
    .then((response) => response);
}