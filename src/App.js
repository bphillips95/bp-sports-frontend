import React, { Component } from 'react'
import './App.css';
import TextEditor from './components/TextEditor'
import {Route, Switch} from "react-router-dom";
import Home from './components/Home'
import {initializeArticles, saveUserToState, initializeTags} from './actions/action'
import {connect} from 'react-redux'
import ArticleContainer from './containers/ArticleContainer';
import Article from './components/Article'
import Login from './components/Login'
import Register from './components/Register'
import EditArticle from './components/EditArticle';
import Profile from './components/Profile'
import SportPage from './components/SportPage'
class App extends Component {

  componentDidMount()  { 
    fetch("http://localhost:3000/articles")
    .then(r => r.json())
    .then(articles => { 
      this.props.initializeArticles(articles)
    }) 
    if(localStorage.getItem("token")) {
      let token = localStorage.getItem("token")
    fetch("http://localhost:3000/api/v1/persist", { 
      headers: {
        "Authorization": `bearer ${token}`
      }
    }).then(r => r.json())
    .then(user => { 
      this.props.saveUserToState(user)
    })
    } 
    fetch("http://localhost:3000/tags")
    .then(r => r.json())
    .then(tags => { 
      this.props.initializeTags(tags)
    })
  }
  handleRegister = (userInfo) => { 
    console.log(userInfo)
  }

  render() {
  return (
        <Switch>
        <Route path="/articles" render={routerProps => <ArticleContainer {...routerProps}/>} />
        <Route path="/articles/:id" component={Article}  />
        <Route path="/articles/:id/edit" component={EditArticle}  />
        <Route path="/write" render={routerProps => <TextEditor {...routerProps} />} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/:tag" render={routerProps => <SportPage {...routerProps} />} />
        <Route path="/profile" render={routerProps => <Profile {...routerProps} />} />
        <Route path="/" component={Home} />
        </Switch>
  );
}
}
export default connect(null, {initializeArticles, saveUserToState, initializeTags})(App);