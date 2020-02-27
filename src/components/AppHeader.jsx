import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Image, Menu, Button} from 'semantic-ui-react'
import {NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/action'
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
            <Menu style={{color:'red'}} tabular > <NavLink to="/">
                <Menu.Item >
                <Image  src={Logo} size='small' style={{"width": '100px', "height": "auto" }}
                 />
                </Menu.Item>
                </NavLink>
                <NavLink to="/register">
                 <Menu.Item  
          name='sign_up'
        >Sign Up
            </Menu.Item>
            </NavLink> 
          {!localStorage.token ? <NavLink to="/login">
            <Menu.Item
          name='login'
        > Log In
          </Menu.Item>
          </NavLink> :  <Button onClick={this.logout}>
                Log Out
                </Button> }  
                <NavLink to="/patriots">
                 <Menu.Item  
          name='patriots'
        >Patriots
            </Menu.Item>
            </NavLink> 
            <NavLink to="/bruins">
                 <Menu.Item  
          name='bruins'
        >Bruins
            </Menu.Item>
            </NavLink> 
            <NavLink to="/redsox">
                 <Menu.Item  
          name='redsox'
        >Red Sox
            </Menu.Item>
            </NavLink> 
            <NavLink to="/celtics">
                 <Menu.Item  
          name='celtics'
        >Celtics
            </Menu.Item>
            </NavLink> 
               
                {/* if redux user state for writer is true NavLink to write */}
          {/* <NavLink to="/write" >
          <Menu.Item>
                Write an article
          </Menu.Item>
          </NavLink> */}
          
          <Menu.Item>
              {localStorage.token ? `Welcome ${localStorage.user}` : "Please Sign up or log in"}
              {localStorage.token ? <NavLink to="/profile" >Profile </NavLink> : null }
          </Menu.Item>
                </Menu>
// / <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="/">BP Sports</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/register">Register</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="/login">Login</a>
//       </li>
//       <li class="nav-item dropdown">
//         <a class="nav-link dropdown-toggle" href="/teams" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Teams
//         </a>
//         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a class="dropdown-item" href="/redsox">Red Sox</a>
//           <a class="dropdown-item" href="/patriots">Patriots</a>
//           <a class="dropdown-item" href="/celtics">Celtics</a>
//           <a class="dropdown-item" href="/bruins">Bruins</a>
//           <div class="dropdown-divider"></div>
//           <a class="dropdown-item" href="/write">Write an article</a>
//         </div>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
//       </li>
//     </ul>
//     <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>
//   </div>
// </nav> 
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
