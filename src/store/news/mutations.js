const newsMutations = {
  // normal action which manipulates state (synchronus manipulation only) (same as reducer in react js)
  setNews(state, payload) {
    state.news = payload
  }
}

export default newsMutations
