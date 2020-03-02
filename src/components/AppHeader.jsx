import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Image, Menu, Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/action'
import ScoreBoard from './ScoreBoard'
class AppHeader extends Component {
   
    logout = () => {
        console.log(this.props.user)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.props.logoutUser()
        console.log(this.props.user)
    }
    render() {
        // console.log(this.props.tags)
            return (   
        //       <div>
        //     <Menu style={{color:'red'}} tabular > <NavLink to="/">
        //         <Menu.Item >
        //         <Image  src={Logo} size='small' style={{"width": '100px', "height": "auto" }}
        //          />
        //         </Menu.Item>
        //         </NavLink>
        //         <NavLink to="/register">
        //          <Menu.Item  
        //   name='sign_up'
        // >Sign Up
        //     </Menu.Item>
        //     </NavLink> 
        //   {!localStorage.token ? <NavLink to="/login">
        //     <Menu.Item
        //   name='login'
        // > Log In
        //   </Menu.Item>
        //   </NavLink> :  <Button onClick={this.logout}>
        //         Log Out
        //         </Button> }  
        //         <NavLink to="/patriots">
        //          <Menu.Item  
        //   name='patriots'
        // >Patriots
        //     </Menu.Item>
        //     </NavLink> 
        //     <NavLink to="/bruins">
        //          <Menu.Item  
        //   name='bruins'
        // >Bruins
        //     </Menu.Item>
        //     </NavLink> 
        //     <NavLink to="/redsox">
        //          <Menu.Item  
        //   name='redsox'
        // >Red Sox
        //     </Menu.Item>
        //     </NavLink> 
        //     <NavLink to="/celtics">
        //          <Menu.Item  
        //   name='celtics'
        // >Celtics
        //     </Menu.Item>
        //     </NavLink> 

        //   <Menu.Item>
        //       {localStorage.token ? `Welcome ${localStorage.user}` : "Please Sign up or log in"}
        //       {localStorage.token ? <NavLink to="/profile" >Profile </NavLink> : null }
        //   </Menu.Item>
       <div>
         <ScoreBoard/>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/" class="navbar-brand">Home</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <NavLink to="/register" class="nav-link" >Sign Up <span class="sr-only">(current)</span></NavLink>
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
        <NavLink to="/standings" class="nav-link" >Standings </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/store" class="nav-link" >Merch </NavLink>
      </li>
         <ul  class="form-inline my-2 my-lg-0" style={{"marginLeft": "55vw"}}>
         {localStorage.token ? `Welcome ${localStorage.user}` : "Please Sign up or log in"}
      </ul>
      <li class="nav-item">
      {localStorage.token ? <NavLink to="/profile" className="nav-link" >Profile </NavLink> : null }
      </li>
      
         </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
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
