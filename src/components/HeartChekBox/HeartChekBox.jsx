import React from "react";
import { useState } from "react";

function HeartChekBox() {
  const [liked, setLiked] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLiked(liked - 1);
    } else {
      setLiked(liked + 1);
    }
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <button className={`like - button ${isClicked && "liked"}`} onClick={handleClick}>
        <span className="likes-counter">{` ${liked}`}</span>
      </button>
    </div>
  );
}

export default HeartChekBox;
