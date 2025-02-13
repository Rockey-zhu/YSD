import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/login/login.vue'),
        meta: {
            ispublic: true
        }
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            ispublic: true
        },
        children: [{
                path: '/home/categories/createEdit',
                name: 'createEdit',
                component: () =>
                    import ('../views/caregories/createEdit.vue')
            }, {
                path: '/home/categories/createList',
                name: 'createList',
                component: () =>
                    import ('../views/caregories/createList.vue')

            }, {
                path: '/home/items/itemsEdit',
                name: 'itemsEdit',
                component: () =>
                    import ('../views/items/itemsEdit.vue')
            }, {
                path: '/home/items/itemsList',
                name: 'itemsList',
                component: () =>
                    import ('../views/items/itemsList.vue')
            }, {
                path: '/home/heroes/heroesEdit',
                name: 'heroesEdit',
                component: () =>
                    import ('../views/heroes/heroesEdit.vue')
            }, {
                path: '/home/heroes/heroesList',
                name: 'heroesList',
                component: () =>
                    import ('../views/heroes/heroesList.vue')
            }, {
                path: '/home/article/articleEdit',
                name: 'articleEdit',
                component: () =>
                    import ('../views/article/articleEdit.vue')
            }, {
                path: '/home/article/articleList',
                name: 'articleList',
                component: () =>
                    import ('../views/article/articleList.vue')
            }, {
                path: '/home/article/artEdit',
                name: 'artEdit',
                component: () =>
                    import ('../views/article/artEdit.vue')
            }, {
                path: '/home/article/artList',
                name: 'artList',
                component: () =>
                    import ('../views/article/artList.vue')
            },
            {
                path: '/home/community/community',
                name: 'community',
                component: () =>
                    import ('../views/community/community.vue')
            }, {
                path: '/home/community/check',
                name: 'check',
                component: () =>
                    import ('../views/community/check.vue')
            },
            {
                path: '/home/adl/adlEdit',
                name: 'adlEdit',
                component: () =>
                    import ('../views/adl/adlEdit.vue')
            }, {
                path: '/home/adl/adlList',
                name: 'adlList',
                component: () =>
                    import ('../views/adl/adlList.vue')
            }, {
                path: '/home/adminUser/adminUser',
                name: 'adminUserList',
                component: () =>
                    import ('../views/adminUser/adminUser.vue')
            },
            {
                path:'/home/3D/three',
                name:"three",
                component: () =>
                    import ('../views/three/three.vue')
            }
        ]

    }

]

const router = new VueRouter({
        routes
    })
    // router.beforeEach((to, form, next) => {
    //         if ((!to.meta.ispublic && !sessionStorage.token) || (to.name === "Home")) {
    //             console.log("reee", to.meta.ispublic, sessionStorage.token)
    //             return next('/login')
    //         }
    //         next()

//     })
// 全局路由守卫，如果不是登录状态，则到登录页面
// router.beforeEach((to, from, next) => {
//     if (sessionStorage.token) {
//         next();
//     } else {
//         if (to.path === "/login") {
//             next();
//         } else {
//             next("/login");
//         }
//     }
// });
export default router