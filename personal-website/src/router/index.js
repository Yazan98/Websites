import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageComponent from '../components/MainPageComponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPageComponent
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/projects/ProjectsComponent.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
