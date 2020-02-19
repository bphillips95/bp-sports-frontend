import React, { Component } from 'react'
import Logo from '../logo.jpeg'
import {Header, Image } from 'semantic-ui-react'
export default class AppHeader extends Component {
    render() {
        return (   
            <Header as='h2'>
                <Image src={Logo} size='small' style={{"width": '100px', "height": "auto" }} />
            </Header>   
        )
    }
}
