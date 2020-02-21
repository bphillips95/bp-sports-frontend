import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import {saveUserToState} from '../actions/action'
import {connect} from 'react-redux'
class Register extends Component {

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
        fetch("http://localhost:3000/api/v1/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                  user: {
                      username: this.state.username,
                      password: this.state.password
                  }  
                })
        })
        .then(r => r.json())
        .then(resp => { 
            if(resp.jwt) {
            localStorage.setItem("token", resp.jwt)
            localStorage.setItem("user", resp.user.username)
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
                <h3>Sign Up Form</h3>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group widths="equal">
                <Form.Input type="text" name="username" placeholder="username" fluid label="Username"
                onChange={this.handleChange} value={this.state.username}/>
                <Form.Input type="password" name="password" placeholder="password" fluid label="Password"
                onChange={this.handleChange} value={this.state.password}/>
                </Form.Group>
                <Form.Button>Sign Up</Form.Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, {saveUserToState})(Register)