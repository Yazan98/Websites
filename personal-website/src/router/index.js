import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPageComponent from '../components/MainPageComponent.vue'
import AboutMeComponent from '../components/AboutMePageComponent.vue'
import ProjectComponent from '../components/pages/ProjectComponent.vue'
import ContactMeComponent from '../components/ContactMeCpmponent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPageComponent
  },
  {
    path: '/contact',
    name: 'home',
    component: ContactMeComponent
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMeComponent
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/projects/ProjectsComponent.vue')
  },
  {
    path: '/prjects/overview',
    name: 'projects',
    component: ProjectComponent
  }
]

const router = new VueRouter({
  routes
})

export default router
