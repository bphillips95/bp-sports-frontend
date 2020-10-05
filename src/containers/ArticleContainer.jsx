import React, { Component } from 'react'
import {connect} from 'react-redux'
import ListArticles from '../components/ListArticles'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import SoxPic from '../logos/red_sox.png'
class ArticleContainer extends Component {
    render() {
       const listArticles = this.props.articles.map(article => <ListArticles article={article} key={article.id} />)
       if(this.props.articles) {
        return (
            <div>
              <strong>Headlines may take some time to load</strong>

              {/* <div class="card bg-dark text-white">
  <img class="card-img" src={SoxPic} alt="Card image" style={{padding-right: '50px'}}></img>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div>
  </div> */}
              {/* Place large article box design here
               */}
                {listArticles}
                  
                {window.outerWidth > 500 ? 
                  <div  style={{position: "absolute",left: '70%',top: '19%'}} className="centerContent" > 
                        <div className="selfCenter standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="mlb"
                                options={{height: 600, width: 400}}
                                noFooter= 'true'
                                theme= 'light'
                            />
                          </div>
                      </div> : null}
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