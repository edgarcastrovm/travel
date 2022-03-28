import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import {createRouter,createWebHistory} from 'vue-router'
import store from './store'
import Home from './views/Home.vue'
import Travel from './views/Travel.vue'

loadFonts()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component : Home},
    {path: '/travel', name: 'Travel', component : Travel}
  ]
})

createApp(App)
  .use(vuetify)
  .use(router)
  .use(store)
  .mount('#app')
