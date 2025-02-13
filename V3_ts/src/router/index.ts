import { createRouter, createWebHistory,createWebHashHistory, } from 'vue-router'
import HomeView from '../views/home.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      name: 'default',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: "/view",
      name: "view",
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/screen",
      component: () => import("@/App.vue"),
      children: [
        {
          path: "",
          name: "plague",
          component: () => import("../views/bigScreen/HomeView.vue")
        },
        {
          path: "plague",
          name: "plague",
          component: () => import("../views/bigScreen/HomeView.vue")
        },
        {
          path: "echarsLeaning",
          name: "echarsLeaning",
          component: () => import("../views/bigScreen/echarsLeaning.vue")
        },
        {
          path: "lazeLoading",
          name: "lazeLoading",
          component: () => import("../views/lazeLoading/lazeLoading.vue")
        }
      ],
    },
    {
      path: "/dataPreview",
      name: "dataPreview",
      component: () => import('../views/dataPreview/dataPreview.vue')
    }
  ]
})
// 路由首位
// router.beforeEach((news,old,next) => {
//   console.log("__new__",news);
//   next()
// }) 

export default router
