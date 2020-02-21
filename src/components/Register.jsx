import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'
import {saveUserToState} from '../actions/action'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
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
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' /> Sign up for an account
              </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <Form.Input fluid icon='user' iconPosition='left' name="username" placeholder="Username"
                  onChange={this.handleChange} value={this.state.username} />
                  <Form.Input
                    name="password"
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.handleChange} value={this.state.password}
                  />
        
                  <Button color='teal' fluid size='large'>
                    Sign Up
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already have an account? <a href='/login'>Log In</a>
              </Message>
            </Grid.Column>
          </Grid>
        )
    }
}

export default connect(null, {saveUserToState})(Register)

 // <div>
            //     <h3>Sign Up Form</h3>
            //     <Form onSubmit={this.handleSubmit}>
            //       <Form.Group widths="equal">
            //     <Form.Input type="text" name="username" placeholder="username" fluid label="Username"
            //     onChange={this.handleChange} value={this.state.username}/>
            //     <Form.Input type="password" name="password" placeholder="password" fluid label="Password"
            //     onChange={this.handleChange} value={this.state.password}/>
            //     </Form.Group>
            //     <Form.Button>Sign Up</Form.Button>
            //     </Form>
            // </div>
