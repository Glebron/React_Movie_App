import Header from "../components/Header";
import { useState, useEffect } from "react";
import MovieList from "../components/MovieList";
import { Pagination, Loader } from "@mantine/core";
import TopList from "../components/TopList";
import "@splidejs/splide";
import "@splidejs/react-splide/css";
import { RiH1 } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import "../App.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [totals, setTotals] = useState(0);
  const [pages, setPages] = useState(0);
  const [topMovies, setTopMovies] = useState([]);

  const MAX_LIMIT_PER_PAGE = 100;

  const fetchMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ebbeaf22f0da2f470228369aa311a38e&language=en-US&page=${activePage}`
    );
    const movieList = await data.json();
    const minTotals = Math.min(movieList.total_results, MAX_LIMIT_PER_PAGE);

    setMovies(movieList.results);
    setFiltered(movieList.results);
    setTotals(minTotals);
    setPages(minTotals);
    setLoader(false);
  };

  const fetchTopMovies = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=ebbeaf22f0da2f470228369aa311a38e&language=en-US&total_results=${5}`
    );
    const topList = await data.json();
    setTopMovies(topList.results);
  };

  useEffect(() => {
    setLoader(true);
    fetchMovies();
    fetchTopMovies();
  }, [activePage]);

  return (
    <div className="App">
      <Header
        totals={totals}
        pages={pages}
        setTotals={setTotals}
        setPages={setPages}
        setActivePage={setActivePage}
        setActiveGenre={setActiveGenre}
        activeGenre={activeGenre}
        setFiltered={setFiltered}
        movies={movies}
        filtered={filtered}
      ></Header>
      <Pagination
        onChange={setActivePage}
        total={Math.floor(pages / 20)}
        className="pagination"
        color="pink"
        radius="xl"
        position="center"
        withEdges
      ></Pagination>
      {loader ? (
        <Loader
          className="loader"
          position="center"
          color="pink"
          variant="dots"
        ></Loader>
      ) : (
        <div></div>
      )}

      <MovieList
        totals={totals}
        activeGenre={activeGenre}
        filtered={filtered}
      ></MovieList>
    </div>
  );
}

export default Home;

// Problems:
// /search page - Home page?
// messy States
// Main page slider? top movies backdrop_path?
// animations
// repeated functionality
// useState (same) for multiple buttons

//Todo
// custom hooks
// Modal details
// Git
