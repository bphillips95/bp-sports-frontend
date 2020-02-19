import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import Article from './Article'
export default class ListArticles extends Component {
    render() {
        let {title,content} = this.props.article
        return (
            <List link>
            <List.Item as='a'  onClick={<Article/>}  >{title}  
            {/* Create a component to read the article */}
            
            </List.Item>
          </List>
        )
    }
}
//    style={{"right": '150px'}}