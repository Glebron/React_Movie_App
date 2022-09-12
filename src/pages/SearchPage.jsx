import React from "react";
import Header from "../components/Header";
import SearchedList from "../components/SearchedList";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination, Loader } from "@mantine/core";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [totals, setTotals] = useState(0);
  const [pages, setPages] = useState(0);

  let params = useParams();

  const MAX_LIMIT_PER_PAGE = 100;

  const fetchSearch = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ebbeaf22f0da2f470228369aa311a38e&language=en-US&query=${params.name}&page=${activePage}`
    );
    const searchedList = await data.json();
    const minTotals = Math.min(searchedList.total_results, MAX_LIMIT_PER_PAGE);

    setMovies(searchedList.results);
    setFiltered(searchedList.results);
    setTotals(minTotals);
    setPages(minTotals);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    fetchSearch();
  }, [activePage, params.name]);

  return (
    <div>
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
      {filtered.length ? (
        <Pagination
          page={activePage}
          onChange={setActivePage}
          total={Math.floor(pages / 20)}
          className="pagination"
          color="pink"
          radius="xl"
          position="center"
          withEdges
        ></Pagination>
      ) : (
        <div></div>
      )}

      {loader ? (
        <Loader
          className="loader"
          position="center"
          color="pink"
          variant="dots"
        />
      ) : null}

      {filtered.length ? (
        <SearchedList
          totals={totals}
          activeGenre={activeGenre}
          filtered={filtered}
        ></SearchedList>
      ) : (
        <h1 className="alert-text">No movie found</h1>
      )}
    </div>
  );
}

export default SearchPage;
