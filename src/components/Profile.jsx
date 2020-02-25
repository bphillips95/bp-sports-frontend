import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends Component {
    render() {
        if(this.props.user.userInfo.user) {
        console.log(this.props.user.userInfo.user) 
        let {username, first_name, last_name, writer} = this.props.user.userInfo.user
        return (
            <div>
             Username: {username}
             <br/>
             First Name: {first_name } 
             <br/>
             Last Name: {last_name}
             <br/>
             Writer? {writer ? "Yes" : "No"}
             <br/>
             <br/>
             {writer ? <Link to="/write" > Click to write an article </Link>  :  null}
            </div>
        )
        }return (
            <div>
                Profile Page
            </div>
        )
    }
}
const getUser = state => { 
    return {
    user: {...state}
}
}
export default connect(getUser)(Profile)