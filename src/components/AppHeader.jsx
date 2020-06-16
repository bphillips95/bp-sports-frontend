import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/action'
import ScoreBoard from './ScoreBoard'
class AppHeader extends Component {

    state = {
      searchBar: ''
    }
   
    logout = () => {
        console.log(this.props.user)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("user_id")
        this.props.logoutUser()
        console.log(this.props.user)
    }
    render() {
            return (   
       <div>
         <ScoreBoard/>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/" class="navbar-brand">Home</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
       <li className="nav-item">
       {!localStorage.token ?  <NavLink to="/register" className="nav-link" >Sign Up <span class="sr-only">(current)</span></NavLink> : null}
      </li> 
      <li class="nav-item">
       {!localStorage.token ? 
        <NavLink to="/login" class="nav-link" >Log In</NavLink> : 
          <button onClick={this.logout} type="button" class="btn btn-light"> Log Out</button>}
          </li>
          <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/teams" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Teams
         </a>
         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
         {this.props.tags.tags ? this.props.tags.tags.map(tag => 
          <NavLink className="dropdown-item" key={tag.id} to={`/${tag.name.toLowerCase().replace(' ','')}`}>{tag.city} {tag.name}</NavLink>)
           : null}
           
           <div className="dropdown-divider"></div>
           <a className="dropdown-item" href="/write">Write an article</a>
          </div>
         </li>
         <li class="nav-item">
        <NavLink to="/standings" className="nav-link" >Standings </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/store" className="nav-link" >Merch </NavLink>
      </li>
      <li class="nav-item">
      {this.props.user?.user?.writer? <NavLink to="/write" className="nav-link" >Write an Article </NavLink> : null }
      </li>
         {localStorage.token ? 
         <ul className="form-inline my-2 my-lg-0" style={{"marginLeft": "55vw"}}>
            Welcome {localStorage.user} </ul>
         : <ul style={{'font-weight': 'bold'}} > Please Sign up or login to write an article </ul>}
      <li class="nav-item">
      {localStorage.token ? <NavLink to="/profile" className="nav-link" >Profile </NavLink> : null }
      </li>
         </ul>
         {/* When adding search add articles to state and move search before Welcome */}
    {/* <form class="form-inline my-2 my-lg-0">
      <input onChange={(evt) => this.setState({searchBar: evt.target.value})} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</div>
        )
    }
}
const mstp = (state) => {
    return { 
        user: {...state.userInfo},
        tags: {...state.tags}
    }
}
export default connect(mstp, {logoutUser})(AppHeader)
