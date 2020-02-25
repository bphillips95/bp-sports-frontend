import React, { Component } from 'react'
import {connect} from 'react-redux'
import { saveUserToState } from '../actions/action'

class Login extends Component {

    state = { 
        username: "",
        password: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("http://localhost:3000/api/v1/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                { 
                //   user: {
                      username: this.state.username,
                      password: this.state.password
                //   }  
                } )
        })
        .then(r => r.json())
        .then(resp => { 
            console.log(resp)
            if(resp.jwt) {
            localStorage.setItem("token", resp.jwt)
            localStorage.setItem("user", resp.user.username)
            localStorage.setItem("user_id", resp.user.id)
            this.props.saveUserToState(resp)
            this.props.history.push('/')
        } else {
            console.log(resp.error)
            this.setState({
                error: resp.error
            })
        }
        })
        }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password}  />
                <br/>
                <button type="submit" > Log In</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {saveUserToState})(Login)
