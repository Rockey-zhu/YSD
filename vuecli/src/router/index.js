import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/three',
        name: 'Three',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Three.vue')
    },
    {
        path: '/luckyexcel',
        name: 'luckyexcel',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/luckyexcel.vue')
    }, {
        path: '/vxe-table',
        name: 'vxe-table',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/vxe-table.vue')
    }, {
        path: '/mavonEditor',
        name: 'mavonEditor',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/mavonEditor.vue')
    }, {
        path: '/html2canvas',
        name: 'html2canvas',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/html2canvas.vue')
    },
    {
        path: '/SlideVerify',
        name: 'SlideVerify',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SlideVerify.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router