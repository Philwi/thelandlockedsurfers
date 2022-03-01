import { createRouter, createWebHistory } from 'vue-router'
import { blogStore } from '@/plugins/store'
import Index from '@/pages/Index.vue'
import Blog from '@/pages/Blog.vue'
import BlogPost from '@/pages/BlogPost.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/blog', component: Blog },
  { path: '/blog/:id', component: BlogPost },
  { path: '/:pathMatch(.*)', component: Index }
]

export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach((to) => {
  const store = blogStore()
})
