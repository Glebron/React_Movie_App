import React from "react";
import MovieCard from "./MovieCard";
import { motion, AnimatePresence } from "framer-motion";
import MovieModal from "./MovieModal";
import { useState } from "react";

function SearchedList({ filtered }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  return (
    <div className="content">
      {modalOpen ? (
        <div>
          <div className="bg"></div>
          <MovieModal
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
            modalContent={modalContent}
          ></MovieModal>
        </div>
      ) : (
        <div></div>
      )}
      <div className="movie-grid">
        <motion.div
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
        >
          <AnimatePresence>
            <div className="movie-grid">
              {filtered.map((movie) => {
                return (
                  <MovieCard
                    modalContent={modalContent}
                    setModalContent={setModalContent}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen}
                    key={movie.id}
                    movie={movie}
                  ></MovieCard>
                );
              })}
            </div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default SearchedList;
