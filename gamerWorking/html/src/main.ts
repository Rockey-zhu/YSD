import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueNextAnimejs from '@maybecode/vue-next-animejs'

createApp(App).use(store).use(vueNextAnimejs).use(router).mount('#app')
