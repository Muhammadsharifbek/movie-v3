import React from "react";

import "./Header.css";

function Header({ movieInfo }) {
  return (
    <div className="movie-wrapper">
      <h2 className="all-movies">Barcha kinolar soni: {movieInfo} </h2>
      <h2 className="movies">Ko'rilgan kinolar:</h2>
    </div>
  );
}

export default Header;
