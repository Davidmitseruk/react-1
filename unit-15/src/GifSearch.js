import React, { Component } from "react";
import "./styles.css";

class GifSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = () => {
    if (this.state.input.trim() !== "") {
      this.props.onSearch(this.state.input);
    }
  };

  render() {
    return (
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search for a GIF..."
          value={this.state.input}
          onChange={this.handleChange}
          className="searchInput"
        />
        <button className="searchBtn" onClick={this.handleSubmit}>
          Search
        </button>
      </div>
    );
  }
}

export default GifSearch;