import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteArticle} from '../actions/action'

class Article extends Component {

    handleDeleteClick = (evt) => {
        let id = parseInt(evt.target.value)
        // Skipped this and simply added a value to the target
        // console.log(id)
        // let articleToDelete = this.props.articles.articles.all.find(obj => obj.id == evt.target.value)
        // console.log(articleToDelete)
        fetch(`https://bp-sports-backend.herokuapp.com/articles/${id}`, {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json"
            }
        }).then(this.props.deleteArticle(id)).then(
             this.props.history.push('/'))
    }
    render() {
        // look through the articles and match the article id to the URL number
        // forced equation bc params id is a string
        let foundArticle = this.props.articles?.articles?.all.find(obj => obj.id == this.props.match.params.id)
    
        // Using optional chaining, I removed if else statement
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
       } 
    }
const getArticle = state => {
    return { 
        articles: {...state}
    }
}

export default connect(getArticle, {deleteArticle})(Article)