import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewMovie.css";

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      viewers: null,
    };
  }

  handleSubmit = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFormHandler = (e) => {
    e.preventDefault();
    this.props.addMovie({ title: this.state.title, viewers: this.state.viewers, id: uuidv4() });
    this.setState({
      title: "",
      viewers: "",
    });
  };

  render() {
    const { title, viewers } = this.state;
    return (
      <div>
        <form onSubmit={this.addFormHandler}>
          <span>Yangi Kino Qo'shish:</span>
          <label className="movie-adder">
            <input type="text" placeholder="movie" name="title" value={title} onChange={this.handleSubmit} required />
          </label>

          <label className="movie-viewer">
            <input type="number" name="viewers" value={viewers} onChange={this.handleSubmit} required />
          </label>
          <button className="button">Add Movie</button>
        </form>
      </div>
    );
  }
}

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
