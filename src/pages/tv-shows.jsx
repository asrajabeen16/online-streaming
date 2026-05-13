import React, { useEffect, useState } from "react";
import Banner from "../components/banner/banner";
import {
  fetchAiringTodayTvShows,
  fetchOnTheAirTvShows,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
} from "../api/moviedb";
import Slider from "../components/slider/slider";
import Footer from "../components/footer/footer";

const TvShows = () => {
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedTvShows, setTopRatedTvShows] = useState([]);
  const [onTheAirTvShows, setOnTheAirTvShows] = useState([]);
  const [airingTodayTvShows, setAiringTodayTvShows] = useState([]);
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    getPopularTvShows();
    getTopRatedTvShows();
    getOnTheAirTvShows();
    getAiringTodayTvShows();
  }, []);

  const getPopularTvShows = async () => {
    const data = await fetchPopularTvShows();
    setPopularTvShows(data.results);
    setBannerData(data.results[0]);
  };

  const getTopRatedTvShows = async () => {
    const data = await fetchTopRatedTvShows();
    setTopRatedTvShows(data.results);
  };

  const getOnTheAirTvShows = async () => {
    const data = await fetchOnTheAirTvShows();
    setOnTheAirTvShows(data.results);
  };

  const getAiringTodayTvShows = async () => {
    const data = await fetchAiringTodayTvShows();
    setAiringTodayTvShows(data.results);
  };

  return (
    <>
      <Banner bannerData={bannerData} />
      <Slider
        rowTitle={"Popular TV Shows"}
        exploreMore={"/tv/category/popular"}
        moviesData={popularTvShows}
      />
      <Slider
        rowTitle={"Top Rated TV Shows"}
        exploreMore={"/tv/category/top_rated"}
        moviesData={topRatedTvShows}
      />
      <Slider
        rowTitle={"Currently Airing TV Shows"}
        exploreMore={"/tv/category/on_the_air"}
        moviesData={onTheAirTvShows}
      />
      <Slider
        rowTitle={"TV Shows Airing Today"}
        exploreMore={"/tv/category/airing_today"}
        moviesData={airingTodayTvShows}
      />
      <Footer />
    </>
  );
};

export default TvShows;
