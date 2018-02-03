import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Articles,
  BlogHomePage,
  ConnectPage,
  HomePage,
  HelloWorldPage,
} from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main">
          <Route exact path="/" component={HomePage} />
          <Route path="/connect" component={ConnectPage} />
          <Route exact path="/blog" component={BlogHomePage} />
          {Articles.map((article, i) => <Route key={i} exact path={article.Details.link} component={article.Page} />)}
        </div>
      </Router>
    );
  }
}

export default App;
