import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListArticles from '../components/ListArticles'
class ArticleContainer extends Component {
    render() {
        console.log(this.props)
       const listArticles = this.props.articles.map(article => <ListArticles article={article} key={article.id} />)
        return (
            <div>
              Latest Headlines
                    {listArticles}
                    {/* <Route
                     path={`articles/:id`} 
                     render={routerProps => <Article {...routerProps} articles={this.props.articles} />}/> */}
            </div>
        )
    }
}

const getInfo = (state) => {
    return {
      articles: state.articles.all
    }
  }
export default connect(getInfo)(ArticleContainer)