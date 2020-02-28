import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Menu,Image} from 'semantic-ui-react'
 
class ScoreBoard extends Component {
    render() {
        let games = this.props.games.games
        console.log(games)
        return (
            <div style={{overflow:"auto"}}>
            <Menu tabular > 
            Scoreboard will be updated at 11AM EST
            {games.map(game => 
                 <Menu.Item  
          name='sign_up'
        >{game.shortName}<br/>{game.date}
            </Menu.Item>
            )}
            </Menu>
            </div>
                )}
}
const getScores = state => {
    return {
        games: {...state.scores}
    }
}

export default connect(getScores)(ScoreBoard)
