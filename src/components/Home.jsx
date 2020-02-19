import React, { Component } from 'react'
import AppHeader from './AppHeader'
import ArticleContainer from '../containers/ArticleContainer'
export default class Home extends Component {
    render() {
        return (
            <div>
                <AppHeader/>
                <ArticleContainer/>
              <ul color= '#00FFFF'> Home Page  </ul> 
            </div>
        )
    }
}
