export const initializeArticles = (articles) => {
    return {
      type: "INITIALIZE_ARTICLES",
      payload: articles
    }
  }