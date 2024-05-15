import React from "react";
import HeartChekBox from "../HeartChekBox/HeartChekBox";
import "./Movie.css";

function Movie({ data, deleteButton }) {
  return (
    <div className="movie">
      <div className="info-wrapper">
        <h2 className="movie-title"> Movie:</h2>
        <p className="movie-view">Views:</p>
      </div>

      {/* ADD NEW MOVIE */}
      <div>
        {data.map((movie) => {
          return (
            <nav className="movie-navigation" key={movie.id}>
              <h2 className="name"> {movie.title}</h2>
              <p className="view">{movie.viewers} </p>

              <button onClick={() => deleteButton(movie.id)}>Delete </button>
              <p className="Likes">
                <HeartChekBox />{" "}
              </p>
            </nav>
          );
        })}
      </div>
    </div>
  );
}

// function Movie({ movies, deleteButton }) {
//   const title = "Interstellar";
//   const prasmotr = 1000000;

// }

export default Movie;

{
  /* <nav className="movie-navigation">
          <h2 className="name">{data.title}</h2>
          <p className="view">{data.viewers}</p>
          <button>Delete</button>
        </nav>


        <nav className="movie-navigation">
          <h2 className="name"> Fight Club</h2>
          <p className="view">189 mln </p>
          <button>Delete</button>
        </nav>

        <nav className="movie-navigation">
          <h2 className="name"> Crimson</h2>
          <p className="view">infinity </p>
          <button>Delete</button>
        </nav> */
}
