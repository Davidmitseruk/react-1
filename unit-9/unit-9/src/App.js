import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;







state = {
  name: "David",
} 

//this.state.name = "Bob";

this.setState(
  state = {
  name: "Bob",
}
)


class Toggle extends Component{
  state = {
    isOpen: false
  };
  show = () => this.setState({isOpen: true})
  hide = () => this.setState({isOpen: false})

  render(){
    const {isOpen} = this.state;
    const {children} = this.props;

    return(
      <>
      <button onClick={this.show}>Show</button>
      <button onClick={this.hide}>Hide</button>
      {isOpen && children}
      </>
    )
  }
}