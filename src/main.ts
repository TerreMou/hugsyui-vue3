import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import Terre from './components/Terre.vue';
import Terre2 from './components/Terre2.vue';

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {path: '/', component: Terre},
    {path: '/xxx', component: Terre2},
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
