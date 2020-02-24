import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Image, Menu} from 'semantic-ui-react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

class AppHeader extends Component {
   
    render() {
        // if(this.props.user.userInfo.user) {
        // console.log(this.props.user.userInfo.user.username)
        // }
      
//             <div class="ui menu">
//   <a class="item">Editorials</a>
//   <a class="item">Reviews</a>
//   <a class="item">Upcoming Events</a>
// </div>
            // <Header as='h2'>
            //     <Image src={Logo} size='small' style={{"width": '100px', "height": "auto" }} />
            // </Header>  
            return (    
            <Menu> <Link to="/">
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
              {/* {localStorage.token ? "Become a writer" : null} */}
                Write an article
          </Menu.Item>
          </Link>
          <Link to="/createwriter" >
          <Menu.Item>
              {/* {localStorage.token ? "Become a writer" : null} */}
                Create Writer
          </Menu.Item>
          </Link>
          <Link to="/selectwriter" >
          <Menu.Item>
              {/* {localStorage.token ? "Become a writer" : null} */}
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
