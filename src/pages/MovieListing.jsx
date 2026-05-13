import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";
import InfiniteScroll from "react-infinite-scroll-component"; // Importing the infinite scroll component
import Card from "../components/card/card";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchUpCommingMovies,
  fetchNowPlayingMovies,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
  fetchAiringTodayTvShows,
  fetchOnTheAirTvShows,
} from "../api/moviedb";
import "./movielisting.css";

const categoryTitles = {
  movie: {
    popular: "Popular",
    top_rated: "Top Rated",
    upcoming: "Upcoming",
    now_playing: "Now Playing",
  },
  tv: {
    popular: "Popular",
    top_rated: "Top Rated",
    airing_today: "Airing Today",
    on_the_air: "On The Air",
  },
};

export default function MovieListing() {
  const { category, type } = useParams();
  const navigate = useNavigate();

  const title = type === "movie" ? "Movies" : "TV Shows";
  const title_type = categoryTitles[type]?.[category] || "Unknown Category";

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // To track the page number

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // Function to fetch data based on category, type, and page
  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      let response;
      if (type === "movie") {
        switch (category) {
          case "popular":
            response = await fetchPopularMovies(page);
            break;
          case "top_rated":
            response = await fetchTopRatedMovies(page);
            break;
          case "upcoming":
            response = await fetchUpCommingMovies(page);
            break;
          case "now_playing":
            response = await fetchNowPlayingMovies(page);
            break;
          default:
            response = [];
        }
      } else if (type === "tv") {
        switch (category) {
          case "popular":
            response = await fetchPopularTvShows(page);
            break;
          case "top_rated":
            response = await fetchTopRatedTvShows(page);
            break;
          case "airing_today":
            response = await fetchAiringTodayTvShows(page);
            break;
          case "on_the_air":
            response = await fetchOnTheAirTvShows(page);
            break;
          default:
            response = [];
        }
      }

      // Add new data to the existing movieData (append)
      setMovieData((prevData) => [...prevData, ...(response.results || [])]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [category, type, page]);

  // Run fetchData whenever the page changes
  useEffect(() => {
    fetchData();
  }, [fetchData, page]); // Fetch data when page changes

  // Handle fetch more on scroll
  const fetchMoreData = () => {
    if (!loading) {
      setPage((prevPage) => prevPage + 1); // Increment page when fetching more
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-[45px] bg-black lg:hidden px-4">
        <button
          onClick={handleBackButtonClick}
          className="text-white text-[1.2rem] capitalize absolute"
        >
          <RiArrowLeftLine color="white" />
        </button>
        <p className="capitalize text-white text-[0.9rem] text-center w-full">
          {title_type} {title}
        </p>
      </nav>

      <div className="my-16 mx-5 lg:m-20">
        <div className="flex items-baseline mb-6">
          <h2 className="text-[1.4rem] text-white">
            {title_type} {title}
          </h2>
        </div>

        <InfiniteScroll
          dataLength={movieData.length}
          next={fetchMoreData}
          hasMore={!loading}
        >
          <div className="movie__listing__items listing__items">
            {movieData.map((movie, index) => (
              <Card movie={movie} key={index} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
