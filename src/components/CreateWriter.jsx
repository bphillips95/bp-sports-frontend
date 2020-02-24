import React, { Component } from 'react'

export default class CreateWriter extends Component {

    state = { 
        first_name: "",
        last_name: ""
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit = (evt) => {
        evt.preventDefault() 
        console.log(this.state)
        fetch("http://localhost:3000/writers", { 
            method: "POST", 
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                writer:{
                first_name: this.state.first_name,
                last_name: this.state.last_name 
                }
            })
        }).then(r => r.json())
        .then(writer => { 
            console.log(writer)
        })
    } 
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>First Name</label>
                <input type="text" name="first_name" onChange={this.handleChange} value={this.state.first_name}/>
                <br/>
                <label>Last Name</label>
                <input type="text" name="last_name" onChange={this.handleChange} value={this.state.last_name}  />
                <br/>
                <button type="submit" > Become a writer</button>
                </form>
            </div>
        )
    }
}
