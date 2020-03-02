import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Menu,Image} from 'semantic-ui-react'
 
class ScoreBoard extends Component {

    handleRender = () => {
        let games = this.props.games.games
        // This finds all the games currently in progress, push each game in progress into an array and all others into another one 
        // and then map thru the proper ones displaying the current game data if its in action. 
    //     games.map(game => {
    //     if (game.status.type.name === "STATUS_IN_PROGRESS")  {
    //         console.log("game in progress")
    //         // console.log(game.competitions[0].competitors[0].score)
    //         // console.log(game.competitions[0].competitors[1].score)
    //     } if (game.status.type.name === "STATUS_FINAL") {
    //     console.log(game.status.type.detail)
    //     // console.log(game.competitions[0].competitors[0].score)
    //     // console.log(game.competitions[0].competitors[1].score)

    // }     else { 
    //         console.log("didnt start yet")
    //     }
    // })
        return (
            <div style={{overflow:"auto"}}>
            <Menu tabular > 
            Scoreboard will be updated at 11AM EST
            {games.map(game => 
                 <Menu.Item>
                     {/* if game statud didnt start yet ternary of time or null if game finished ternary of final or null if game !== didnt start yet- show score */}
        {game.shortName}<br/> 
                {game.status.type.name === "STATUS_SCHEDULED" ? null : `${game.competitions[0].competitors[0].score} - ${game.competitions[0].competitors[1].score}`}
       <br/> {game.status.type.name !== "STATUS_SCHEDULED" ?  game.status.type.detail : `${game.date.slice(11,16)} UTC`}
            </Menu.Item>
            )}
            </Menu>
            </div>
                )
    }
    render() {
     return (
         <React.Fragment>
         {this.handleRender()}
         </React.Fragment>
     )
    }}
const getScores = state => {
    return {
        games: {...state.scores}
    }
}

export default connect(getScores)(ScoreBoard)
