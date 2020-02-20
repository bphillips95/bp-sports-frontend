import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
// need Route ignore VScode
import { BrowserRouter as Route, Link} from "react-router-dom";
export default class ListArticles extends Component {
    render() {
        let {title,content,id} = this.props.article
        return (
            <List link>
            <List.Item>
        <Link key={id} to={`/articles/${id}`}  >{title} </Link>
            {/* Create a component to read the article */} 
            
            </List.Item>
          </List>
        )
    }
}

//    style={{"right": '150px'}}