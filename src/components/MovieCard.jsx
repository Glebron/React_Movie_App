import React from "react";
import { motion } from "framer-motion";

function MovieCard({ movie, setModalOpen, modalOpen, setModalContent }) {
  const openModal = () => {
    setModalOpen(!modalOpen);
    setModalContent(movie);
  };

  return (
    <motion.div onClick={openModal} layout className="movie-card">
      <img
        src={
          !movie.poster_path
            ? "../images/no-poster.png"
            : "https://image.tmdb.org/t/p/w300" + movie.poster_path
        }
        alt={movie.title}
      />
      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        <span>{movie.vote_average}</span>
      </div>
    </motion.div>
  );
}

export default MovieCard;
