export const initializeArticles = (articles) => {
    return {
      type: "INITIALIZE_ARTICLES",
      payload: articles
    }
  }

export const saveUserToState = userInfo => { 
  return { 
    type: "SAVE_USER_TO_STATE",
    payload: userInfo
  }
}
export const saveUpdatedArticle = (article) => ({
  type: "SAVE_UPDATED_ARTICLE",
  payload: article
})
export const logoutUser = () => ({
  type: "LOG_OUT_USER"
})

