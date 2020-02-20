const initialState = {
    all: []
  }
  
  const articleReducer = (state = initialState, {type, payload}) => {
    switch (type) {
  
      case "INITIALIZE_ARTICLES":
        return {...state, all: payload}
  
      default:
        return state;
  
    }
  }
  
  
  export default articleReducer