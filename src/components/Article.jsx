import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import EditArticle from './EditArticle'
import {Link } from 'react-router-dom'

class Article extends Component {

    // handleEditClick = (evt) => {
    //     // console.log(evt.target.value) // value is the article id
    //     let articleToEdit = this.props.articles.articles.all.find(obj => obj.id == evt.target.value)
    //     console.log(articleToEdit)
    //     // <Link article={articleToEdit}> </Link> 
    //     //  send this
    // }
    render() {
        // find the if of line 8 in line 9 
        // console.log(this.props.match.params.id)
        // console.log(this.props.articles.all)
        // forced equation bc params id is a string
        let foundArticle = this.props.articles.articles.all.find(obj => obj.id == this.props.match.params.id)
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
           <Link to={`/articles/${foundArticle.id}/edit`}  >Edit Article </Link> 
            {/* <button value={foundArticle.id} onClick={this.handleEditClick}>Edit Article</button> */}
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