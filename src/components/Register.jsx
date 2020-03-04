import React, { Component } from 'react'
// import { Form } from 'semantic-ui-react'
import {saveUserToState} from '../actions/action'
import {connect} from 'react-redux'
import { Button, Form, Grid, Header, Image, Message, Segment, Checkbox } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Logo from '../logo.jpeg'
class Register extends Component {

    state = { 
        username: "",
        password: "",
        first_name: "", 
        last_name: "",
        writer: false
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleWriterCheck = () => {
      // alert("WARNING, UNCHECKING THIS BOX WILL MAKE YOU UNABLE TO WRITE ARTICLES")
      this.setState({
        writer: !this.state.writer
      })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        fetch("https://bp-sports-backend.herokuapp.com/api/v1/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(
                {
                  user: {
                      username: this.state.username,
                      password: this.state.password,
                      first_name: this.state.first_name,
                      last_name: this.state.last_name, 
                      writer: this.state.writer
                  }  
                })
        })
        .then(r => r.json())
        .then(resp => { 
            if(resp.jwt) {
            localStorage.setItem("token", resp.jwt)
            localStorage.setItem("user", resp.user.username)
            localStorage.setItem("user_id",resp.user.id)
            this.props.saveUserToState(resp)
            this.props.history.push('/')
        } else {
            console.log(resp.error)
            alert("Please enter a password between 6-20 letters")
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
                <Image src={Logo} /> 
                Sign up for an account
              </Header>
              <Form size='large' onSubmit={this.handleSubmit}>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' name="first_name" placeholder="First Name"
                  onChange={this.handleChange} value={this.state.first_name} />
                  <Form.Input fluid icon='user' iconPosition='left' name="last_name" placeholder="Last Name"
                  onChange={this.handleChange} value={this.state.last_name} />
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

                    Would you like to be a writer? <Checkbox onClick={this.handleWriterCheck}/>  
                  <Button color='teal' fluid size='large'>
                    Sign Up
                  </Button>
                </Segment>
              </Form>
              <Message>
                Already have an account? <Link to='/login'>Log In</Link> 
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
