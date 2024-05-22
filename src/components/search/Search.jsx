import { useState } from "react";
import "./Search.css";

const Search = ({ updateTermInput }) => {
  const [term, setTerm] = useState("");

  const searchHandler = (e) => {
    const term = e.target.value.toLowerCase();
    setTerm(term);
    updateTermInput(term);
  };
  return (
    <input
      className="search"
      type="text
            "
      placeholder="write..."
      onChange={searchHandler}
      value={term}
    />
  );
};

export default Search;
