import React, { Component } from 'react';
import logo from './logo.svg';
import User from "./containers/users/index";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User />
      </div >
    );
  }
}

export default App;
