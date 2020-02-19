import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListArticles from '../components/ListArticles'
class ArticleContainer extends Component {
    render() {
        return (
            <div>
                {this.props.articles.map(article => <ListArticles article={article} key={article.id} />)}
            </div>
        )
    }
}

const getInfo = (state) => {
    return {
      articles: state.all
    }
  }
export default connect(getInfo)(ArticleContainer)