const initialState = {
    
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case "INITIALIZE_TAGS":
        return { ...state, tags: payload }
    default:
        return state
    }
}
