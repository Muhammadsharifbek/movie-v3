import { Component } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Movie from "./components/movieList/Movie";

import "./App.css";
import NewMovie from "./components/addMovie/NewMovie";
import FilterMovie from "./components/FilterMovie/FilterMovie";

class NewArrMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Interstellar", viewers: 10000, id: 1 },
        { title: "Fight club", viewers: 40000, id: 2 },
        { title: "Dune", viewers: 69000, id: 3 },
      ],
      term: "",
      filter: "",
    };
  }
  deleteButton = (id) => {
    this.setState(({ data }) => {
      const newArr = data.filter((movie) => movie.id !== id);
      return {
        data: newArr,
      };
    });
  };

  addMovie = (movie) => {
    this.setState(({ data }) => ({
      data: [...data, movie],
    }));
  };

  handleSearch = (arr, term) => {
    if (term.length === 0) {
      return arr;
    }
    return arr.filter((movie) => movie.title.toLowerCase().indexOf(term.toLowerCase()) > -1);
  };

  updateFilter = (arr, filter) => {
    switch (filter) {
      case "mostViewer":
        return arr.filter((c) => c.viewers > 90300);

      default:
        return arr;
    }
  };

  updateTermInput = (term) => this.setState({ term });
  updateFilterInput = (filter) => this.setState({ filter });

  render() {
    const { data, term, filter } = this.state;
    const movieInfo = data.length;
    const searchInput = this.updateFilter(this.handleSearch(data, term), filter);
    return (
      <div>
        <h2>
          <marquee direction="">Crimson</marquee>
          <Header movieInfo={movieInfo} />

          <Search updateTermInput={this.updateTermInput} />
          <FilterMovie filter={filter} updateFilterInput={this.updateFilterInput} />

          <Movie deleteButton={this.deleteButton} data={searchInput} />
          <NewMovie addMovie={this.addMovie} />
        </h2>
      </div>
    );
  }
}

export default NewArrMovie;
