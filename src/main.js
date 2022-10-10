import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store) //injects Vuex into all components
  .use(router)
  .mount('#app')
