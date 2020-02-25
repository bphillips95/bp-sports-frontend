import React, { Component } from 'react'
import './App.css';
import TextEditor from './components/TextEditor'
import {Route, Switch} from "react-router-dom";
import Home from './components/Home'
import {initializeArticles, saveUserToState} from './actions/action'
import {connect} from 'react-redux'
import ArticleContainer from './containers/ArticleContainer';
import Article from './components/Article'
import Login from './components/Login'
import Register from './components/Register'
import CreateWriter from './components/CreateWriter'
import SelectWriter from './components/SelectWriter'
import EditArticle from './components/EditArticle';
import Semantic from './components/Semantic'
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
  }
  handleRegister = (userInfo) => { 
    console.log(userInfo)
  }

  render() {
  return (
      // <Router>
        <Switch>
        <Route exact path="/articles" render={routerProps => <ArticleContainer {...routerProps}/>} />
        <Route exact path="/articles/:id" component={Article}  />
        <Route exact path="/articles/:id/edit" component={EditArticle}  />
        <Route exact path="/write" render={routerProps => <TextEditor {...routerProps} />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {/* <Route path="/logout" component={Register} /> */}
        <Route path="/createwriter" component={CreateWriter} />
        <Route path="/selectwriter" component={SelectWriter} />
        <Route path="/semantic" component={Semantic} />
        <Route path="/" component={Home} />
        </Switch>
      //  </Router>
  );
}
}
export default connect(null, {initializeArticles, saveUserToState})(App);