import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomePage from '@/views/homePage/HomePage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    // component: HomePage,
    // component: () => import(/* webpackChunkName: "about" */ '@/views/occupationPage/OccupationPage.vue')
    component: () => import(/* webpackChunkName: "about" */ '@/views/expensePage/ExpensePage.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
