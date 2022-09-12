import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import Form from "./Form";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import { useEffect } from "react";

function Header({
  activeGenre,
  setActiveGenre,
  movies,
  setFiltered,
  totals,
  setPages,
  setActivePage,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
      return;
    }
    const filteredList = movies.filter((movie) => {
      return movie.genre_ids.includes(activeGenre);
    });

    setFiltered(filteredList);
  }, [activeGenre]);

  return (
    <header>
      <NavLink to={"/"} className="logo">
        <RiMovie2Line></RiMovie2Line>
        <h3>Movies</h3>
      </NavLink>
      <div className="header-container">
        <div className="movie-filters">
          <Button
            className={activeGenre === 0 ? "activeBtn" : ""}
            onClick={() => {
              setActiveGenre(0);
              setPages(totals);
            }}
            radius="xl"
            variant="outline"
            color="dark"
          >
            All
          </Button>
          <Button
            className={activeGenre === 28 ? "activeBtn" : ""}
            onClick={() => {
              setActiveGenre(28);
              setPages(20);
            }}
            variant="outline"
            color="dark"
            radius="xl"
          >
            Action
          </Button>
          <Button
            className={activeGenre === 35 ? "activeBtn" : ""}
            onClick={() => {
              setActiveGenre(35);
              setPages(20);
            }}
            variant="outline"
            color="dark"
            radius="xl"
          >
            Comedy
          </Button>
        </div>
        <Form setActivePage={setActivePage}></Form>
      </div>
    </header>
  );
}

export default Header;
