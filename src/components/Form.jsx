import React from "react";
import { Input, Button } from "@mantine/core";
import { RiSearch2Line } from "react-icons/ri";
import { TbMovie } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const searchMovies = async (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <div>
      <form
        autocomplete="off"
        onSubmit={searchMovies}
        className="search-form"
        action=""
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="search-input"
          icon={<TbMovie />}
          placeholder="Seach movie"
        ></Input>
        <Button type="submit" color="dark">
          <RiSearch2Line></RiSearch2Line>
        </Button>
      </form>
    </div>
  );
}

export default Search;
