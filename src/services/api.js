import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '4d0a04127880a649e2fd6707ef8a5d37';
axios.defaults.baseURL = BASE_URL;

const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return data.results;
  } catch (error) {
    console.error('error');
  }
  return [];
};

const fetchMovies = async query => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}`,
    );
    return data.results;
  } catch (error) {
    console.error('error');
  }
  return [];
};

const fetchMovieById = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error('error');
  }
  return [];
};

const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}`,
    );
    return data;
  } catch (error) {
    console.error('error');
  }
  return [];
};

const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}`,
    );
    return data.results;
  } catch (error) {
    console.error('error');
  }
  return [];
};

export {
  fetchReviews,
  fetchCast,
  fetchMovieById,
  fetchMovies,
  fetchTrendingMovies,
};
