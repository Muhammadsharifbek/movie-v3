import "./Search.css";
import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }
  searchHandler = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.updateTermInput(term);
  };
  render() {
    return (
      <input
        className="search"
        type="text
            "
        placeholder="write..."
        onChange={this.searchHandler}
      />
    );
  }
}

export default Search;
