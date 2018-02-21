import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BreakoutGame from "../src/Components/BreakoutGame.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <BreakoutGame/>
      </div>
    );
  }
}

export default App;
