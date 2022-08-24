import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SearchPage from "./SearchPage";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:name" element={<SearchPage />} />
    </Routes>
  );
}

export default Pages;
