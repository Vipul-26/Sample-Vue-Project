import axios from 'axios'

export default {
  state: {
    // only way to access state is through getter functions, all state variables with their initial values
    news: []
  },
  getters: {
    // functions to get state data in any files (selectors), key value pairs
    getNewsData: (state) => state.news
  },
  actions: {
    // actions are similar to mutations, the differences being that is instead of mutating the state, actions commit mutations + actions can contain arbitrary asynchronus operations, action with asynchronus manipulation (api call) (same as sagas in react)
    getNews(context) {
      axios
        .get(
          'https://newsapi.org/v2/top-headlines/sources?apiKey=e6b098e69eef4e42b97d6811694c6e50'
        )
        .then((response) => {
          context.commit('setNews', response.data.sources)
        })
    }
  },
  mutations: {
    // the only way to actually change state in a Vuex store is by committing a mutation (reducer), normal action which manipulates state (synchronus manipulation only) (same as reducer in react js)
    setNews(state, payload) {
      state.news = payload
    }
  }
}
