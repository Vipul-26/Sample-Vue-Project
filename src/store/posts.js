import axios from 'axios'

export default {
  state() {
    return {
      posts: []
    }
  },
  getters: {
    getPostsData(state) {
      return state.posts
    }
  },
  actions: {
    getPosts(context) {
      axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
        context.commit('setPosts', response.data)
      })
    }
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    }
  }
}
