import axios from 'axios';

export default function fetchMovies () {
    return axios
    .get(`https://api.themoviedb.org/3/movie/76341?api_key=${config.apiKey}`)
    .then((response) => response);
}