import React, { Component } from 'react';
import HomePage from './containers/homePage';
import ConnectPage from './containers/connectPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectPage />
      </div>
    );
  }
}

export default App;
