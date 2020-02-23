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
            <Menu>
                <Menu.Item >
                <Image src={Logo} size='small' style={{"width": '100px', "height": "auto" }}
                 />
                </Menu.Item>
                {/* <Link to="/register" ></Link> */}
                 <Menu.Item
          name='sign_up'
        >Sign Up
            </Menu.Item>
            {/* </Link>  */}
            <Menu.Item
          name='login'
        //   active={activeItem === 'login'}
          onClick={this.handleItemClick}
        > Log In
          </Menu.Item>
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
