import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import {deleteArticle} from '../actions/action'

class Article extends Component {

    handleDeleteClick = (evt) => {
        // console.log(evt.target.value) // value is the article id
        let id = parseInt(evt.target.value)
        // console.log(id)
        // let articleToDelete = this.props.articles.articles.all.find(obj => obj.id == evt.target.value)
        // console.log(articleToDelete)
        fetch(`http://localhost:3000/articles/${id}`, {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json"
            }
        }).then(this.props.deleteArticle(id)).then(
             this.props.history.push('/'))
    }
    render() {
        // find the if of line 8 in line 9 
        // console.log(this.props.match.params.id)
        // console.log(this.props.articles.all)
        // forced equation bc params id is a string
        let foundArticle = this.props.articles?.articles?.all.find(obj => obj.id == this.props.match.params.id)
    //    console.log(foundArticle)
    //    if(foundArticle) { 
    //     let tagName = foundArticle.article_tags.map(article_tag => article_tag.name)
    //   console.log(tagName)
    //    }
    
    // if (foundArticle) {
        // console.log(typeof(parseInt(localStorage.user_id)))
        //    console.log(typeof(foundArticle.writer.writer_id))
        return (
            <Container text>
            <Header as='h2'>  
                {foundArticle?.title} </Header>
                <h3>
                   By {foundArticle?.writer?.writer_name}
                </h3>
            <div dangerouslySetInnerHTML={{__html: foundArticle?.content}}></div>
           <br></br>
           {/* Conditionally render Edit and delete if user id matches writer id */}
           {foundArticle?.writer?.writer_id === parseInt(localStorage.user_id) ?  <div>
           <Link to={`/articles/${foundArticle.id}/edit`}  >Edit Article </Link> 
            <button value={foundArticle.id} onClick={this.handleDeleteClick}>Delete Article</button> </div>
           : null }
            </Container>
        ) 
    // }
        // else { 
        //     return <div>
        //         Article Not Found
        //     </div>
        // }
       } 
    }
const getArticle = state => {
    return { 
        articles: {...state}
    }
}
// items: state.shoppingCart.itemIds.map(id => 
//     state.products.itemsById[id]
export default connect(getArticle, {deleteArticle})(Article)