export const initializeArticles = (articles) => {
    return {
      type: "INITIALIZE_ARTICLES",
      payload: articles
    } }
export const saveUserToState = userInfo => { 
  return { 
    type: "SAVE_USER_TO_STATE",
    payload: userInfo
  }}
export const saveArticle = (article) => ({
  type: "SAVE_ARTICLE",
  payload: article
})
export const deleteArticle = (article) => ({
  type: "DELETE_ARTICLE",
  payload: article
})
export const updateArticle = (article) => ({
  type: "UPDATE_ARTICLE",
  payload: article
})
export const logoutUser = () => ({
  type: "LOG_OUT_USER"
})
export const initializeTags = (tags) => ({
  type: "INITIALIZE_TAGS",
  payload: tags
})
export const initializeScoreboard = (payload) => ({
  type: "INITIALIZE_SCOREBOARD",
  payload
})
export const updateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user
})




