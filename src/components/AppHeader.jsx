import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Image, Menu, Button} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
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
          {!localStorage.token ? <Link to="/login">
            <Menu.Item
          name='login'
        > Log In
          </Menu.Item>
          </Link> :  <Button onClick={this.logout}>
                Log Out
                </Button> }  
               

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
        user: {...state.userInfo}
    }
}
export default connect(mstp, {logoutUser})(AppHeader)
