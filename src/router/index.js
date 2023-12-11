import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue'
import Courses from '../views/Courses.vue'
import Overviews from '../views/Overviews.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses,
  },
  {
    path: '/courses/:id',
    name: 'overview',
    component: Overviews,
    params: "id",
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: NotFound,
 }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router