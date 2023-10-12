import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // External css added/imported here
import store from './store'

const app = createApp(App) // Creating the main app
app.use(router) // integrating router functionality & store functionality
app.use(store) // integrating store functionality
app.mount('#app') // mounting the app with app id
