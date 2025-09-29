import React, { Component } from "react";
import "./styles.css";

class GifList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword && this.props.keyword !== "") {
      this.fetchGifs(this.props.keyword);
    }
  }

  fetchGifs = async (keyword) => {
    const API_KEY = "hEDfBkqDwrXbcTWl4lmBP0196xxT2KYl";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=50`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ gifs: data.data });
    } catch (error) {
      console.error("Failed to load", error);
    }
  };

  render() {
    return (
      <div className="gifList">
        {this.state.gifs.length === 0 ? (
          <p className="emptyMessage">No GIFs yet. Try searching above!</p>
        ) : (
          this.state.gifs.map((gif) => (
            <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} />
          ))
        )}
      </div>
    );
  }
}

export default GifList;