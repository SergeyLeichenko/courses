import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://service.lms.academweb.tech/api';

createApp(App).use(router).use(store).mount('#app')
