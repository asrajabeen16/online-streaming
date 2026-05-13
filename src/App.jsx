import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./pages/layout";
import Movies from "./pages/movies";
import TvShows from "./pages/tv-shows";
import PageNotFound from "./components/pnf/page-not-found";
import Search from "./pages/search/search";
import MovieListing from "./pages/MovieListing";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollTop />
      <Routes>
        <Route
          path="/"
          element={<AppLayout isOpen={isOpen} setIsOpen={setIsOpen} />}
        >
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TvShows />} />
          {/* make this dynamic route /movie/category/popular  sometimes /tv/category/popular*/}
          <Route path="/:type/category/:category" element={<MovieListing />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
