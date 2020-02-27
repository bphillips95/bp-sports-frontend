import React, { Component } from 'react'
import { List, Item, Image} from 'semantic-ui-react'
import MlbLogo from '../mlb_logo3.png'
// need Route ignore VScode
import { BrowserRouter as Route, Link} from "react-router-dom";
export default class ListArticles extends Component {
    render() {
        let {title,content,id,writer,article_tags} = this.props.article
        // console.log(article_tags)
        return (
        //     <List link>
        //     <List.Item>
        // <Link key={id} to={`/articles/${id}`}  >{title} </Link>
        //     {/* Create a component to read the article */} 
            
        //    </List.Item>
        //   </List>

  <Item.Group> 
    <Item>
      <Item.Image src={MlbLogo} size='tiny' />

      <Item.Content>
      <Link key={id} to={`/articles/${id}`} > <Item.Header>{title}</Item.Header></Link>
       
        <Item.Meta>{writer.writer_name}</Item.Meta>
         <Item.Description>
        </Item.Description>{article_tags.length !== 0 ?
        <Item.Extra> Team: {article_tags.map(article_tag => article_tag.name)}</Item.Extra> 
        : null }
      </Item.Content>
    </Item>
    </Item.Group> 

//     <div class="card-deck">
//   <div class="card">
//     <div class="card-body">
//   <h5 class="card-title">{title}</h5>
//   <p class="card-text">{content}</p>
//     </div>
//     <div class="card-footer">
//   <small class="text-muted">By {writer.writer_name}</small>
//     </div>
//   </div>
// </div>
        )
    }
}