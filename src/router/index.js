import { createRouter, createWebHistory } from 'vue-router'
import News from '../views/News.vue'
import Blog from '../views/Blog.vue'
import Development from '../views/Development.vue'

const routes = [
  {
    path: '/',
    name: 'News',
    component: News
  },
  {
    path: '/blog',
    name: 'Blog',
    component : Blog
  },
  {
    path : '/development',
    name : 'Development',
    component : Development
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
