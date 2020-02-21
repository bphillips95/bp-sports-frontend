const initialState = { 
    username: '',
    password: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SAVE_USER_TO_STATE":
        return { ...state, ...payload }

    default:
        return state
    }
}




