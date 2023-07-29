import { createStore } from 'vuex'
import news from './news/index'
import posts from './posts/index'

const store = createStore({
  modules: {
    news: news,
    posts: posts
  },
  devtools: true
})

// export store to use in main.js
export default store
