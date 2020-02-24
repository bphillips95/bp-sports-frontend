import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Image, Menu} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

class AppHeader extends Component {
   
    render() {
            return (    
            <Menu tabular> <Link to="/">
                <Menu.Item >
                <Image  src={Logo} size='small' style={{"width": '100px', "height": "auto" }}
                 />
                </Menu.Item>
                </Link>
                <Link to="register">
                 <Menu.Item 
          name='sign_up'
        >Sign Up
            </Menu.Item>
            </Link> 
            <Link to="/login">
            <Menu.Item
          name='login'
        > Log In
          </Menu.Item>
          </Link>
          <Link to="/write" >
          <Menu.Item>
                Write an article
          </Menu.Item>
          </Link>
          <Link to="/createwriter" >
          <Menu.Item>
                Create Writer
          </Menu.Item>
          </Link>
          <Link to="/selectwriter" >
          <Menu.Item>
                Select Writer
          </Menu.Item>
          </Link>
          <Menu.Item>
              {localStorage.token ? `Welcome ${localStorage.user}` : "Please Sign up or log in"}
          </Menu.Item>
                </Menu>

        )
    }
}
const mstp = (state) => {
    return { 
        user: {...state}
    }
}
export default connect(mstp)(AppHeader)
