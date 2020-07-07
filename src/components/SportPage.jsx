import React, { Component } from 'react'
import {Item} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import MlbLogo from '../mlb_logo3.png'
import soxlogo from '../logos/red_sox.png'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
class SportPage extends Component {

    handleRender = () => {
        if(this.props.tags.tags) {
            // Taking out the spaces and making team names lowerCase in order to match
            const sportsTag = this.props?.tags?.tags?.find(tag => tag.name.toLowerCase().replace(' ','') === this.props.match.params.tag)
            if(sportsTag) { 
            let {city, name, articles} = sportsTag
                // add writer name to article
            return ( 
    //             <div style={{'text-align': 'center'}}>
    //                 <div style={{'display': 'inline-block'}} >
    //              <h2 >{city} {name}</h2> 
    //              </div>
    //                 <br/>
    //                 <br/>
    //                 List of Articles
    //                 <br/>
    //  {articles.map(article => <Link key={article.id} to={`articles/${article.id}`}> <br/>{article.name} </Link>)}
                     
    //             </div>
                  <Item.Group> 
                      <Item.Header>{city} {name}</Item.Header>
                      {articles.map(article => 
                  <Item>
                      
                    <Item.Image src={MlbLogo} size='tiny' />
                    <Item.Content>
                    <Link key={article.id} to={`/articles/${article.id}`} > <Item.Header>{article.name}</Item.Header></Link> 
                    </Item.Content>
                 
                  </Item>
                     )}
                     {/* works for most teams needs a refresh */}
                      {/* {window.outerWidth > 500 ? 
                  <div  style={{position: "absolute",left: '70%',top: '15%'}} className="centerContent" > 
                        <div className="selfCenter standardWidth">
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName={name}
                                options={{height: 600, width: 400}}
                                noFooter= 'true'
                                theme= 'light'
                            />
                          </div>
                      </div> : null} */}
                  </Item.Group> 
            )
            } else {
                return(
                    <h2>Please go to a valid page</h2>
                )
            }
        }
    }
    render() {
        return (
            <div>
                {this.handleRender()}
            </div>
        )
    }}
const getTags = state => {
    return {
        tags: {...state.tags}
    }
}
export default connect(getTags)(SportPage)