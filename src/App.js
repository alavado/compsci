import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Compsci, la gran empresa de expertos en React
          </p>
          <a
            className="App-link"
            href="https://compsci.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Expertos en React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
