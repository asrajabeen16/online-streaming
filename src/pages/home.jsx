import React, { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import Slider from "../components/slider/slider";
import { fetchTrendingMovies, fetchTrendingTvShows } from "../api/moviedb";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/footer";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [bannerData, setBannerData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies();
    getTrendingTvShows();
  }, [location.pathname]);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    setTrendingMovies(data.results);
    if (data.results && data.results.length > 0) {
      const randomMovie =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBannerData(randomMovie);
    }
  };

  const getTrendingTvShows = async () => {
    const data = await fetchTrendingTvShows();
    setTrendingTvShows(data.results);
  };

  return (
    <div className="main">
      <div className="searchBar"></div>
      <Banner bannerData={bannerData} />
      <Slider
        rowTitle={"Trending Movies"}
        moviesData={trendingMovies}
        exploreMore={"/movie"}
      />
      <Slider
        rowTitle={"Trending TV Shows"}
        moviesData={trendingTvShows}
        exploreMore={"/tv"}
      />
      <Footer />
    </div>
  );
};

export default Home;
