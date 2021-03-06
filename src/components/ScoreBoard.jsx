import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Menu} from 'semantic-ui-react'
 
class ScoreBoard extends Component {

    handleRender = () => {
        let games = this.props.games.games

        return (
            <div style={{overflow:"auto"}}>
            <Menu tabular > 
            Scoreboard will be updated at 11AM EST
            {games.map(game => 
                 <Menu.Item>
                     {/* if game statud didnt start yet = ternary of time or null. if game finished = ternary of final or null. if game !== didnt start yet- show score */}
        {game.shortName}<br/> 
        {/* If game is final or in progress, show the score */}
                {game.status.type.name === "STATUS_SCHEDULED" ? null : `${game.competitions[0].competitors[0].score} - ${game.competitions[0].competitors[1].score}`}
                {/* If game is scheduled, then show the time, if final or in progress, say FINAL or LIVE */}
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
         {/* <ul>Congrats Dodgers! The Scoreboard will be back for the 2021 season.</ul> */}
         </React.Fragment>
     )
    }}
const getScores = state => {
    return {
        games: {...state.scores}
    }
}
//   Comment the function back in when scoreboard is live 

export default connect(getScores)(ScoreBoard)
