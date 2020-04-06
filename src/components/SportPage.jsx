import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SportPage extends Component {

    handleRender = () => {
        if(this.props.tags.tags) {
            // Taking out the spaces and making team names lowerCase in order to match
            const sportsTag = this.props?.tags?.tags?.find(tag => tag.name.toLowerCase().replace(' ','') === this.props.match.params.tag)
            if(sportsTag) { 
            console.log(sportsTag)
            let {city, name, articles} = sportsTag
            return ( 
                <div>
                 This the Page for the {city} {name}
                    <br/>
                    <br/>
                    List of Articles
                    <br/>
     {articles.map(article => <Link key={article.id} to={`articles/${article.id}`}> <br/>{article.name} </Link>)}
                </div>
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