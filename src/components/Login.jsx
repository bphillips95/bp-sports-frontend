import React, { Component } from 'react'
import {connect} from 'react-redux'
import { saveUserToState } from '../actions/action'
import {Grid,Header,Image,Form,Segment,Button,Message} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import Logo from '../logo.jpeg'

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
        fetch("https://bp-sports-backend.herokuapp.com/api/v1/login",{
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
            alert("Wrong username or password")
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
                <Image src={Logo} /> 
                Log in to your account
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
                    Log In
                  </Button>
                </Segment>
              </Form>
              <Message>
                Dont't have an account? <Link to='/register'>Sign Up</Link> 
              </Message>
            </Grid.Column>
          </Grid>
        )
    }
}

export default connect(null, {saveUserToState})(Login)
