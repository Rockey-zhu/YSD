import { createApp, createVNode ,render} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/iconfont/iconfont.js'
import "@/assets/iconfont/iconfont.css";
import DataVVue3 from '@kjgl77/datav-vue3'
import loadingBar from './components/loadingbar.vue'
const VNODE = createVNode(loadingBar);

router.beforeEach((to,from,next) => {
    VNODE.component?.exposed?.startLoading();
    next();
})
router.afterEach((to, from) => {
    VNODE.component?.exposed?.endLoading();
})


render(VNODE,document.body)

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(DataVVue3)

app.mount('#app')
