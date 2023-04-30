import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      // redirect: '/new-route', redirect to new route
      name: 'about',
      component: () => import('../views/AboutView.vue') // Lazy Load this component
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      beforeEnter(to) {
        alert('Please login first')
        // redirect back home
        if (to.name !== 'Home') {
          return '/'
        }
      }
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogView.vue'),
      children: [
        {
          path: '/blogs/:id',
          name: 'singleblog',
          component: () => import('../views/SingleBlogView.vue')
        }
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from) => {
  console.log('Before route loaded')
  console.log('Coming from:', from.path)
  console.log('Going to:', to.path)
})

router.beforeResolve(() => {
  console.log('After route loaded, before navigation')
})

router.afterEach(() => {
  console.log('After navigation')
})

export default router
