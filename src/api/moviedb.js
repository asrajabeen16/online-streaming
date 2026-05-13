import axios from "axios";

const APIKEY = import.meta.env.VITE_API_KEY;

const baseUrl = "https://api.themoviedb.org/3";

// All Movies Endpoints
const trendingMoviesEndpoint = `${baseUrl}/trending/movie/week?api_key=${APIKEY}`;
const popularMoviesEndpoint = `${baseUrl}/movie/popular?api_key=${APIKEY}`;
const topRatedMoviesEndpoint = `${baseUrl}/movie/top_rated?api_key=${APIKEY}`;
const upCommingMoviesEndpoint = `${baseUrl}/movie/upcoming?api_key=${APIKEY}`;
const nowPlayingMoviesEndpoint = `${baseUrl}/movie/now_playing?api_key=${APIKEY}`;

// All TV Shows Endpoints
const trendingTvShowsEndpoint = `${baseUrl}/trending/tv/week?api_key=${APIKEY}`;
const popularTvShowsEndpoint = `${baseUrl}/tv/popular?api_key=${APIKEY}`;
const topRatedTvShowsEndpoint = `${baseUrl}/tv/top_rated?api_key=${APIKEY}`;
const onTheAirTvShowsEndpoint = `${baseUrl}/tv/on_the_air?api_key=${APIKEY}`;
const airingTodayTvShowsEndpoint = `${baseUrl}/tv/airing_today?api_key=${APIKEY}`;

const apiCall = async (endpoint, page = 1) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: {
      api_key: APIKEY,
      page: page,  // Add page as a parameter to handle pagination
    },
  };
  try {
    const response = await axios.request(options);
    return response?.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { results: [] }; // Return empty data if there is an error
  }
};

// All fetch functions for Movies
export const fetchTrendingMovies = (page) => apiCall(trendingMoviesEndpoint, page);
export const fetchPopularMovies = (page) => apiCall(popularMoviesEndpoint, page);
export const fetchTopRatedMovies = (page) => apiCall(topRatedMoviesEndpoint, page);
export const fetchUpCommingMovies = (page) => apiCall(upCommingMoviesEndpoint, page);
export const fetchNowPlayingMovies = (page) => apiCall(nowPlayingMoviesEndpoint, page);

// Fetch functions for TV Shows
export const fetchTrendingTvShows = (page) => apiCall(trendingTvShowsEndpoint, page);
export const fetchPopularTvShows = (page) => apiCall(popularTvShowsEndpoint, page);
export const fetchTopRatedTvShows = (page) => apiCall(topRatedTvShowsEndpoint, page);
export const fetchOnTheAirTvShows = (page) => apiCall(onTheAirTvShowsEndpoint, page);
export const fetchAiringTodayTvShows = (page) => apiCall(airingTodayTvShowsEndpoint, page);
