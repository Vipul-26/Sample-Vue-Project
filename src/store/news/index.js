import newsActions from './actions'
import newsGetter from './getters'
import newsMutations from './mutations'

const news = {
  namespaced: true,
  state() {
    return {
      // all state variables with their initial values
      news: []
    }
  },
  getters: newsGetter,
  actions: newsActions,
  mutations: newsMutations
}

export default news
