import React, { Component } from 'react'
import {Item} from 'semantic-ui-react'
import MlbLogo from '../mlb_logo3.png'
// need Route ignore VScode
import { BrowserRouter as Route, Link} from "react-router-dom";
export default class ListArticles extends Component {
    render() {
        let {title,content,id,writer,article_tags} = this.props.article
        return (
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

  // <Grid container columns='equal' >
  //     <Grid.Column>
  //       <Segment>
  //     <Menu fluid vertical>
  //     <Image src={MlbLogo} size='small' />
  //     <Link key={id} to={`/articles/${id}`}> <Menu.Item  className='header'>{title}</Menu.Item> </Link> 
  //         <Menu.Item>{writer.writer_name}</Menu.Item>
  //         <Menu.Item>Cockerspaniel</Menu.Item>
  //       </Menu>
  //       </Segment>
  //     </Grid.Column>
  //   </Grid>
        )
    }
}