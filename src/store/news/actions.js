import axios from 'axios'

const newsActions = {
  // action with asynchronus manipulation (api call) (same as sagas in react)
  getNews(context) {
    axios
      .get(
        'https://newsapi.org/v1/articles?source=${channelName}&apiKey=c40d4dc492a8434a9b91a932f745989af'
      )
      .then((response) => {
        context.commit('setNews', response.data)
      })
  }
}

export default newsActions
