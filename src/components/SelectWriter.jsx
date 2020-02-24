import React, { Component } from 'react'

export default class SelectWriter extends Component {

    state = { 
        writer: []
    }
    componentDidMount() { 
        fetch("http://localhost:3000/writers")
        .then(r => r.json())
        .then(writer => { 
            this.setState({
                writer
            })
        })
    }
    handleClick = (evt) => {
        // console.log(evt.target)
        localStorage.setItem("writer_id", evt.target.value)
    }
    render() {
        console.log(this.state)
        if(this.state.writer) {
        return (
            <div>
                {this.state.writer.map(writer => <li value={writer.id} key={writer.id}
                onClick={this.handleClick}>{writer.first_name} {writer.last_name}</li>)}
            </div>
        )
        } else { 
            return (
                <div>
                    Loading Writers
                </div>
            )
        }
    }
}
