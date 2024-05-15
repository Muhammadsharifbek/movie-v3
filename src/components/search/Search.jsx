import "./Search.css";
import React, { useState } from "react";

function Search() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <div>
        <nav>
          <input
            className="search"
            type="text
          "
            placeholder="write..."
          />
        </nav>
        <span></span>
      </div>

      <button className="button1 button " style={{ backgroundColor: activeButton === "button1" ? "crimson" : "" }} onClick={() => handleButtonClick("button1")}>
        Barcha Kinolar
      </button>
      <button className="button2 button " style={{ backgroundColor: activeButton === "button2" ? "crimson" : "" }} onClick={() => handleButtonClick("button2")}>
        Mashhur Kinolar
      </button>
      <button className="button3 button " style={{ backgroundColor: activeButton === "button3" ? "crimson" : "" }} onClick={() => handleButtonClick("button3")}>
        Eng Ko'p ko'rilgan kinolar
      </button>
      <style>
        {`
          button.active {
            background-color: crimson;
          }
        `}
      </style>
    </div>
  );

  // return (

  // );
}
export default Search;
