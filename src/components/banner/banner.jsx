import React from "react";
import "./banner.css";
import { RiPlayFill } from "@remixicon/react";
import { motion } from "framer-motion";

const Banner = ({ bannerData }) => {
  const formatVoteCount = (vote_count) => {
    return vote_count >= 1000
      ? new Intl.NumberFormat().format(vote_count)
      : vote_count;
  };
  
  let bannerOverview = bannerData?.overview?.split(" ").slice(0, 30).join(" ");

  return (
    <div className="heroBanner">
      <div className="movieImg">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [1, 0, 0, 1] }}
            src={`https://image.tmdb.org/t/p/w1280${bannerData?.backdrop_path}`}
            alt={bannerData?.title || bannerData?.name}
            className="movieImage"
          />
        </div>
      </div>
      <div className="txtBx">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, }}
        >
          <h1 className="movieTitle">{bannerData?.title || bannerData?.name}</h1>
          <div className="movieMeta">
            <div className="movieReviews">
              <div className="card__rating">
                <div className="card__stars w-[6.5rem] h-4">
                  <div
                    style={{
                      width: `${bannerData?.vote_average * 10}%`,
                    }}
                  ></div>
                </div>
                {/* <div className="card__vote">{bannerData.vote_average}</div> */}
                <div>{formatVoteCount(bannerData?.vote_count)} Reviews</div>
              </div>
            </div>
            <div className="movieInfo">
              <span>
                {bannerData?.release_date?.split("-")[0] ||
                  bannerData?.first_air_date?.split("-")[0]}
              </span>
              <span>1h 25min</span>
              <span>Cert. 18</span>
            </div>
          </div>
          <div className="movieDesc">
            {bannerOverview}
            {bannerOverview?.length < 30 && "..."}
          </div>
          <button className="button movieTrailerBtn">
            <RiPlayFill className="button--icon" />
            Watch Trailer
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
