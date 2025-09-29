import React, {Component} from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      keyword: ""
    }
  }
  handleSearch = (keyword) => {
    this.setState({keyword})
  }
  render(){
    return(
      <div className="appContainer">
       <h1>search Gif</h1>
       <GifSearch
       onSearch = {this.handleSearch}
       />
       <GifList
       keyword = {this.state.keyword}
       /> 
      </div>
    )
  }
}

export default App;
