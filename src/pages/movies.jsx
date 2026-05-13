import React, { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import {
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpCommingMovies,
} from "../api/moviedb";
import Slider from "../components/slider/slider";
import Footer from "../components/footer/footer";

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    getPopularMovies();
    getTopRatedMovies();
    getUpCommingMovies();
    getNowPalyingMovies();
  }, []);

  const getPopularMovies = async () => {
    const data = await fetchPopularMovies();
    setPopularMovies(data.results);
    setBannerData(data.results[0]);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    setTopRatedMovies(data.results);
  };

  const getUpCommingMovies = async () => {
    const data = await fetchUpCommingMovies();
    setUpcomingMovies(data.results);
  };

  const getNowPalyingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    setNowPlayingMovies(data.results);
  };

  return (
    <>
      <Banner bannerData={bannerData} />
      <Slider
        rowTitle={"Popular Movies"}
        exploreMore={"/movie/category/popular"}
        moviesData={popularMovies}
      />
      <Slider
        rowTitle={"Top Rated Movies"}
        exploreMore={"/movie/category/top_rated"}
        moviesData={topRatedMovies}
      />
      <Slider
        rowTitle={"Upcoming Movies"}
        exploreMore={"/movie/category/upcoming"}
        moviesData={upcomingMovies}
      />
      <Slider
        rowTitle={"Now Playing Movies"}
        exploreMore={"/movie/category/now_playing"}
        moviesData={nowPlayingMovies}
      />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Movies;
