import React, { Component } from 'react'
import { List, Item, Image} from 'semantic-ui-react'
import MlbLogo from '../mlb_logo3.png'
// need Route ignore VScode
import { BrowserRouter as Route, Link} from "react-router-dom";
export default class ListArticles extends Component {
    render() {
        let {title,content,id,writer} = this.props.article
        // console.log(this.props.article)
        return (
        //     <List link>
        //     <List.Item>
        // <Link key={id} to={`/articles/${id}`}  >{title} </Link>
        //     {/* Create a component to read the article */} 
            
        //     </List.Item>
        //   </List>
/* <Item.Group> 
    <Item>
      <Item.Image src={MlbLogo} size='tiny' />

      <Item.Content>
      <Link key={id} to={`/articles/${id}`} > <Item.Header>{title}</Item.Header></Link>
       
        <Item.Meta>{writer.writer_name}</Item.Meta>
        {/* <Item.Description>
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra> */
    //   </Item.Content>
    // </Item>
    // </Item.Group> */}
    <div class="card-deck">
  <div class="card">
    <div class="card-body">
  <h5 class="card-title">{title}</h5>
  <p class="card-text">{content}</p>
    </div>
    <div class="card-footer">
  <small class="text-muted">By {writer.writer_name}</small>
    </div>
  </div>
</div>
        )
    }
}