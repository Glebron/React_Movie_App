import React from "react";
import { MdCancel } from "react-icons/md";

function MovieModal({ modalContent, setModalOpen, modalOpen }) {
  return (
    <div className="movie-modal">
      <MdCancel
        onClick={() => setModalOpen(!modalOpen)}
        className="close-modal"
      ></MdCancel>
      <div className="modal-img">
        <img
          src={
            !modalContent.poster_path
              ? "../images/no-poster.png"
              : "https://image.tmdb.org/t/p/w300" + modalContent.poster_path
          }
          alt=""
        />
      </div>
      <div className="modal-caption">
        <h1 className="modal-title">{modalContent.original_title}</h1>
        <p className="modal-text">{modalContent.overview}</p>
      </div>
    </div>
  );
}

export default MovieModal;
