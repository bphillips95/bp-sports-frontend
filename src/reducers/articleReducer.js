const initialState = {
    all: []
  }
  
  const articleReducer = (state = initialState, {type, payload}) => {
    switch (type) {
      case "INITIALIZE_ARTICLES":
        return {...state, all: payload}
      case "SAVE_ARTICLE": 
        return {...state,  all: state.all.concat(payload)}
      case "DELETE_ARTICLE":
        let restOfArticles = state.all.filter(article => article.id !== payload)
        return {...state, all: restOfArticles}
      case "UPDATE_ARTICLE": 
      let otherArticles = state.all.filter(article => article.id !== payload.id)
        return {...state, all: otherArticles.concat(payload)}
      default:
        return state;
    }
  }
  export default articleReducer