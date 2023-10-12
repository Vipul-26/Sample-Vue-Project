import { createStore } from 'vuex'
import createPersistedState from 'vuex-plugin-persistedstate'
import news from './news'
import posts from './posts'

const store = createStore({
  modules: {
    news,
    posts
  },
  // devtools: true,
  plugins: [
    createPersistedState({
      paths: ['news', 'posts'],
      storage: window.sessionStorage
    })
  ]
})

// export store to use in main.js
export default store
