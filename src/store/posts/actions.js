import axios from 'axios'

const postsActions = {
  getPosts(context) {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      context.commit('setPosts', response.data)
    })
  }
}

export default postsActions
