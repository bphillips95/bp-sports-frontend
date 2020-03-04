import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {updateUser} from '../actions/action'

class Profile extends Component {

    handleWriterClick = () => {
        let id = this.props.user.userInfo.user.id
        fetch(`https://bp-sports-backend.herokuapp.com/api/v1/users/${id}`, { 
            method: "PATCH",
            headers: { 
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify({
                    writer: true
            })
        }).then(r => r.json())
        .then(user => { 
            alert("You are now a writer, please refresh to write")
            this.props.history.push("/")
        })
    }

    render() {
        if(this.props.user.userInfo.user) {
        console.log(this.props.user.userInfo.user) 
        let {username, first_name, last_name, writer, articles} = this.props.user.userInfo.user
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
             {writer ? <Link to="/write" > Click to write an article </Link>  :  <button onClick={this.handleWriterClick}>Would you like to become a writer</button>}
             <br/>
             <br/>
             {first_name} {last_name}'s Articles 
             <br/>
             {articles.map(article => <Link key={article.id} to={`articles/${article.id}`}> <br/>{article.title} </Link>)}
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
export default connect(getUser, {updateUser})(Profile)