import React from "react";
import MovieCard from "./MovieCard";
import { motion, AnimatePresence } from "framer-motion";

function MovieList({ filtered }) {
  return (
    <div className="content-wrapper">
      <motion.div
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
      >
        <AnimatePresence>
          <div className="movie-grid">
            {filtered.map((movie) => {
              return <MovieCard key={movie.id} movie={movie}></MovieCard>;
            })}
          </div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default MovieList;
