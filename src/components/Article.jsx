import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'

export default class Article extends Component {
    render() {
        // let {title,content} = this.props.article
        return (
            <Container text>
            <Header as='h2'>Header</Header>
            <p>
                Content
            </p>
            </Container>
        )
    }
}
