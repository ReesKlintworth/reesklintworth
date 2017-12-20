import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  BlogHomePage,
  ConnectPage,
  HomePage,
} from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/connect" component={ConnectPage} />
          <Route exact path="/blog" component={BlogHomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
