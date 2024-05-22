import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewMovie.css";

const NewMovie = ({ addMovie }) => {
  const [state, setState] = useState({ title: "", viewers: "" });

  const handleSubmit = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addFormHandler = (e) => {
    e.preventDefault();
    const data = { title: state.title, viewers: state.viewers, id: uuidv4() };
    addMovie(data);

    setState({
      title: "",
      viewers: "",
    });
  };

  return (
    <div>
      <form onSubmit={addFormHandler}>
        <span>Yangi Kino Qo'shish:</span>
        <label className="movie-adder">
          <input type="text" placeholder="movie" name="title" value={state.title} onChange={handleSubmit} required />
        </label>

        <label className="movie-viewer">
          <input type="number" name="viewers" value={state.viewers} onChange={handleSubmit} required />
        </label>
        <button className="button">Add Movie</button>
      </form>
    </div>
  );
};

// function NewMovie({ addMovie }) {
//   const [movie, setMovie] = useState({

//   });

// }

// onChange={(e) => {
//   setMovie((prev) => {
//     return { ...prev, view: e.target.value };
//   });
// }}

export default NewMovie;
