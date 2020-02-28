const initialState = {
    games: []
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
    case "INITIALIZE_SCOREBOARD":
        return { ...state, games: payload }
    default:
        return state
    }
}
