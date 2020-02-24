import React, { Component } from 'react'

import ArticleContainer from '../containers/ArticleContainer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <ArticleContainer/>
                <br></br>
              {localStorage.toker ? `Welcome ${localStorage.user}` : "Please log in"} 
              </div>
        )
    }
}
