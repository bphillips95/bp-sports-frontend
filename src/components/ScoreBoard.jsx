import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Menu,Image} from 'semantic-ui-react'
 
class ScoreBoard extends Component {
    render() {
        let games = this.props.games.games
        // 
        // console.log(games)
        // This finds all the games currently in progress, push each game in progress into an array and all others into another one 
        // and then map thru the proper ones displaying the current game data if its in action. 
    //     games.map(game => {
    //     if (game.status.type.name === "STATUS_IN_PROGRESS")  {
    //         console.log("game in progress")
    //     }else { 
    //         console.log("not in progress")
    //     }
    // })
        return (
            <div style={{overflow:"auto"}}>
            <Menu tabular > 
            Scoreboard will be updated at 11AM EST
            {games.map(game => 
                 <Menu.Item>
        {game.shortName}<br/>{game.date}
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
