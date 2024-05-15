import { Component, useState } from "react";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Movie from "./components/movieList/Movie";

import "./App.css";
import NewMovie from "./components/addMovie/NewMovie";
import HeartCheckBox from "./components/HeartChekBox/HeartCheckBox";
// import { c } from "vite/dist/node/types.d-aGj9QkWt";

class NewArrMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { title: "Interstellar", viewers: 10000, id: 1 },
        { title: "Fight club", viewers: 40000, id: 2 },
        { title: "Interstellar", viewers: 10000, id: 3 },
      ],
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

  render() {
    const { data } = this.state;
    const movieInfo = data.length;
    return (
      <div>
        <h2>
          <Header movieInfo={movieInfo} />
          <Search />
          {/* <HeartCheckBox /> */}
          <Movie deleteButton={this.deleteButton} data={this.state.data} />
          <NewMovie addMovie={this.addMovie} />
        </h2>
      </div>
    );
  }
}

export default NewArrMovie;
