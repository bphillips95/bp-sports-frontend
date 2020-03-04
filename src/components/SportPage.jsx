import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class SportPage extends Component {

    handleRender = () => {
        if(this.props.tags.tags) {
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
            }
        }
    }
    render() {
        return (
            <div>
                <h2>Please go to a valid page</h2>
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


    // if(tag.name.includes(" ")){
    //     return tag.name.toLowerCase().replace(" ","") === this.props.match.params.tag
    // } else {
    //     console.log(tag.name)
    //     return tag.name.toLowerCase() === this.props.match.params.tag
    // }
    // console.log(tag.name)