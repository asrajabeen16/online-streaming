import React from "react";
import { motion } from "framer-motion";
import "./card.css";

const Card = ({ movie }) => {
  console.log(movie)
  return (
    <div className="card">
      <a href="#">
        <div className="card__img">
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
            alt={movie.title || "Movie Poster"}
            className="w-full h-full"
          />
        </div>
      </a>
      <div className="card__link hidden md:block">
        <h2 className="card__name">
          {movie.title || movie.name || "Untitled Movie"}
        </h2>
        <div className="card__rating">
          <div className="card__stars">
            <div
              style={{
                width: `${movie.vote_average * 10}%`,
              }}
            ></div>
          </div>
          <div className="card__vote">{movie.vote_average.toFixed(1)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
