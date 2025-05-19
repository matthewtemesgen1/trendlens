import axios from 'axios';

const API_KEY = '87fff5f5ea2e868e7e0332a9839713c2';
const BASE_URL = 'https://api.themoviedb.org/3';

// Get today's trending movies
export const fetchTrendingMovies = () =>
  axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);

// Get list of movie genres
export const fetchGenres = () =>
  axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);

// Search movies by title
export const searchMovies = (query) =>
  axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);

// Get details for a specific movie
export const fetchMovieById = (id) =>
  axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);