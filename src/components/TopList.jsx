import React from "react";
import "@splidejs/splide";
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import MovieCard from "./MovieCard";

function TopList({ topMovies }) {
  return (
    <div className="top-slider">
      <Splide
        options={{
          perPage: 1,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "5rem",
        }}
      >
        {topMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <MovieCard movie={movie}></MovieCard>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default TopList;
