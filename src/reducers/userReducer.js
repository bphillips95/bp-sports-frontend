const initialState = { 
    username: '',
    password: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case "SAVE_USER_TO_STATE":
        return { ...state, ...payload }
    case 'LOG_OUT_USER':
        return {userInfo: {} }

    default:
        return state
    }
}




