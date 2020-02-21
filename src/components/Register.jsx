import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
export default class Register extends Component {

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
        // this.props.handleSubmit(this.state)
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group widths="equal">
                <Form.Input type="text" name="username" placeholder="username" fluid label="Username"
                onChange={this.handleChange} value={this.state.username}/>
                <Form.Input type="password" name="password" placeholder="password" fluid label="Password"
                onChange={this.handleChange} value={this.state.password}/>
                </Form.Group>
                <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}
