import React, { Component } from 'react'
import { List, Item, Image} from 'semantic-ui-react'
import MlbLogo from '../mlb_logo3.png'
// need Route ignore VScode
import { BrowserRouter as Route, Link} from "react-router-dom";
export default class ListArticles extends Component {
    render() {
        let {title,content,id} = this.props.article
        return (
        //     <List link>
        //     <List.Item>
        // <Link key={id} to={`/articles/${id}`}  >{title} </Link>
        //     {/* Create a component to read the article */} 
            
        //     </List.Item>
        //   </List>
<Item.Group> 
    <Item>
      <Item.Image src={MlbLogo} size='tiny' />

      <Item.Content>
      <Link key={id} to={`/articles/${id}`} > <Item.Header>{title}</Item.Header></Link>
       
        <Item.Meta>Description</Item.Meta>
        <Item.Description>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>
    </Item.Group>
        )
    }
}