import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListArticles from '../components/ListArticles'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
class ArticleContainer extends Component {
    render() {
       const listArticles = this.props.articles.map(article => <ListArticles article={article} key={article.id} />)
       if(this.props.articles) {
        return (
            <div>
              <strong>Latest Headlines</strong>
                    {listArticles}
                    <div  style={{
                position: "absolute",
                left: '70%',
                top: '15%'}} className="centerContent" > 
                      <div className="selfCenter standardWidth">
                          <TwitterTimelineEmbed
                              sourceType="profile"
                              screenName="mlb"
                              options={{height: 600, width: 400}}
                              noFooter= 'true'
                              theme= 'light'
                            //   onComplete={action}
                          />
</div>
</div>
            </div>
        )
      } else {
         return(
         <div>Articles are loading</div>
         )}
    }
}
const getInfo = (state) => {
    return {
      articles: state.articles.all
    }
  }
export default connect(getInfo)(ArticleContainer)