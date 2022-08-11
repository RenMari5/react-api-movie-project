import axios from 'axios';

export default function fetchMovies() {
    return axios
    .get(`hhttps://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}`)
    .then((response) => response);
}