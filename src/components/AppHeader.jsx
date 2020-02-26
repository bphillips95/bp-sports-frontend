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
