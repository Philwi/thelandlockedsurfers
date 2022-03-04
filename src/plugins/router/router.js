import { createRouter, createWebHistory } from 'vue-router'
import { blogStore } from '@/plugins/store'
import AboutUs from '@/pages/AboutUs.vue'
import Blog from '@/pages/Blog.vue'
import BlogPost from '@/pages/BlogPost.vue'
import Index from '@/pages/Index.vue'
import Philipp from '@/pages/about-us/Philipp.vue'
import Lena from '@/pages/about-us/Lena.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/blog', component: Blog, meta: { title: 'Blog Übersicht' } },
  { path: '/blog/:id', component: BlogPost, meta: { title: 'Blog Post' } },
  { path: '/ueber-uns', component: AboutUs, meta: { title: 'Über uns' } },
  { path: '/ueber-uns/philipp', component: Philipp },
  { path: '/ueber-uns/lena', component: Lena },
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
