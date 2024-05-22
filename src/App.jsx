import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Movie from "./components/movieList/Movie";

import "./App.css";
import NewMovie from "./components/addMovie/NewMovie";
import FilterMovie from "./components/FilterMovie/FilterMovie";

const App = () => {
  const [data, setData] = useState([
    { title: "Interstellar", viewers: 10000, id: 1 },
    { title: "Fight club", viewers: 40000, id: 2 },
    { title: "Dune", viewers: 69000, id: 3 },
  ]);
  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const addMovie = (movie) => {
    const newItem = { title: movie.title, viewers: movie.viewers, id: uuidv4() };
    const newArr = [...data, newItem];
    setData(newArr);
  };

  const deleteButton = (id) => {
    const newArr = data.filter((movie) => movie.id !== id);
    setData(newArr);
  };

  const handleSearch = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((movie) => movie.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  const updateFilter = (arr, filter) => {
    switch (filter) {
      case "mostViewer":
        return arr.filter((c) => c.viewers > 50300);

      default:
        return arr;
    }
  };

  const updateTermInput = (term) => setTerm(term);
  const updateFilterInput = (filter) => setFilter(filter);

  return (
    <div>
      <h2>
        <marquee direction="">Crimson</marquee>
        <Header movieInfo={data.length} />

        <Search updateTermInput={updateTermInput} />
        <FilterMovie visibleCount={data.length} updateFilterInput={updateFilterInput} filter={filter} />

        <Movie deleteButton={deleteButton} data={updateFilter(handleSearch(data, term), filter)} />
        <NewMovie addMovie={addMovie} />
      </h2>
    </div>
  );
};

export default App;
