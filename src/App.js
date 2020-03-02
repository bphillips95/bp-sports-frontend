import React, { Component } from 'react'
import './App.css';
import TextEditor from './components/TextEditor'
import {Route, Switch} from "react-router-dom";
import Home from './components/Home'
import {initializeArticles, saveUserToState, initializeTags, initializeScoreboard} from './actions/action'
import {connect} from 'react-redux'
import ArticleContainer from './containers/ArticleContainer';
import Article from './components/Article'
import Login from './components/Login'
import Register from './components/Register'
import EditArticle from './components/EditArticle';
import Profile from './components/Profile'
import SportPage from './components/SportPage'
import Standings from './components/Standings';
class App extends Component {

  componentDidMount()  { 
    fetch("http://bp-sports-backend.herokuapp.com/articles")
    .then(r => r.json())
    .then(articles => { 
      this.props.initializeArticles(articles)
    }) 
    if(localStorage.getItem("token")) {
      let token = localStorage.getItem("token")
    fetch("http://bp-sports-backend.herokuapp.com/api/v1/persist", { 
      headers: {
        "Authorization": `bearer ${token}`
      }
    }).then(r => r.json())
    .then(user => { 
      this.props.saveUserToState(user)
    })
    } 
    fetch("http://bp-sports-backend.herokuapp.com/tags")
    .then(r => r.json())
    .then(tags => { 
      this.props.initializeTags(tags)
    })  
    fetch("https://site.api.espn.com/apis/site/v2/sports/baseball/mlb/scoreboard")
    .then(r => r.json())
    .then(resp => { 
      this.props.initializeScoreboard(resp.events)
      })
    }
  

  handleRegister = (userInfo) => { 
    console.log(userInfo)
  }
// dynamic articles routes must be first, tag and home last
  render() {
  return (
        <Switch>
        <Route path="/articles/:id/edit" component={EditArticle}  />
        <Route path="/articles/:id" component={Article}  />
        <Route path="/articles" render={routerProps => <ArticleContainer {...routerProps}/>} />
        <Route path="/write" render={routerProps => <TextEditor {...routerProps} />} />
        <Route path="/standings" component={Standings} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" render={routerProps => <Profile {...routerProps} />} />
        <Route path="/:tag" render={routerProps => <SportPage {...routerProps} />} />
        <Route path="/" component={Home} />
        </Switch>
  );
}
}
export default connect(null, {initializeArticles, saveUserToState, initializeTags, initializeScoreboard})(App);