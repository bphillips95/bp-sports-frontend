import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'

class Article extends Component {
    render() {
        // find the if of line 8 in line 9 
        // console.log(this.props.match.params.id)
        // console.log(this.props.articles.all)
        // forced equation bc params id is a string
        let foundArticle = this.props.articles.all.find(obj => obj.id == this.props.match.params.id)
       console.log(foundArticle)

       if (foundArticle) {
        return (
            <Container text>
            <Header as='h2'>  
                {foundArticle.title} </Header>
                <h3>
                   By {foundArticle.writer.writer_name}
                </h3>
            <p>
            {foundArticle.content}
            </p>
            </Container>
        ) }
        else { 
            return <div>
                Loading, Loading
            </div>
        }
       } 
    }
const getArticle = state => {
    return { 
        articles: {...state}
    }
}
// items: state.shoppingCart.itemIds.map(id => 
//     state.products.itemsById[id]
export default connect(getArticle)(Article)