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
      default:
        return state;
  
    }
  }
  
  
  export default articleReducer