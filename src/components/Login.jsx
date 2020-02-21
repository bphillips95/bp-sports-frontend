import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <label>Username</label>
                <input type="text"/>
                <br/>
                <label>Password</label>
                <input type="password"/>
            </div>
        )
    }
}

export default Login
