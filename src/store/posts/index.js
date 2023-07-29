import postsActions from './actions'
import postsGetter from './getters'
import postsMutations from './mutations'

const posts = {
  namespaced: true,
  state() {
    return {
      posts: []
    }
  },
  getters: postsGetter,
  actions: postsActions,
  mutations: postsMutations
}

export default posts
