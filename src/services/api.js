import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4d0a04127880a649e2fd6707ef8a5d37';

export function fetchTrendingMovies() {
  return axios
    .get(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
}

export function fetchMovies(query) {
  return axios
    .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`)
    .then(({ data }) => data.results);
}

export function fetchMovieById(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`)
    .then(({ data }) => data);
}

export function fetchCast(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(({ data }) => data);
}

export function fetchReviews(movieId) {
  return axios
    .get(`${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(({ data }) => data.results);
}
