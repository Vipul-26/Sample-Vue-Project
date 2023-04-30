import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // External css added/imported here

const app = createApp(App) // Creating the main app
app.use(router) // integrating router functionality
app.mount('#app') // mounting the app with app id
