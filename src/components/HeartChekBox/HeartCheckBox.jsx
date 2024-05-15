import React from "react";
import { useState } from "react";

function StarChekBox() {
  const [liked, setLiked] = useState(false);

  const handleFavorite = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <button
        onClick={handleFavorite}
        style={{
          width: "20px",
          height: "20px",
          border: "none",
          background: "none",
          padding: "0",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="100%"
          height="100%"
          fill={liked ? "yellow" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 Z" />
        </svg>
      </button>
    </div>
  );
}

export default StarChekBox;
