import React, { Component } from 'react'
import './App.css';
// import MyComponent from './components/Writing'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import {initializeArticles} from './actions/action'
import {connect} from 'react-redux'
import ArticleContainer from './containers/ArticleContainer';


class App extends Component {

  componentDidMount()  { 
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then(articles => { 
      this.props.initializeArticles(articles)
    })
  }
  render() {
  return (
      <Router>
        <Switch>
        <Route path="/" component={Home} />
        <Route path="/articles" component={ArticleContainer} />
        </Switch>
      </Router>
  );
}
}
export default connect(null, {initializeArticles})(App);