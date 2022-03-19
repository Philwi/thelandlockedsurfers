import { createRouter, createWebHistory } from 'vue-router'
import { blogStore } from '@/plugins/store'
import Blog from '@/pages/Blog.vue'
import BlogPost from '@/pages/BlogPost.vue'
import Index from '@/pages/Index.vue'
import WeForYou from '@/pages/WeForYou.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/blog', component: Blog,
    meta: {
      title: 'Blog Übersicht',
      description: 'Auf unserem Blog erfahrt ihr alle Neuigkeiten von uns rund um die Themen Surfen, Wohnmobil und Reisen. Unsere Katze Winnie ist immer mit dabei. :)',
      keywords: 'Surfen, Wohnmobil, Reisen, Katzen'
    }
  },
  { path: '/blog/:id', component: BlogPost, meta: { title: 'Blog Post' } },
  { path: '/wir-fuer-euch', component: WeForYou,
    meta: {
      title: 'Wir für Euch!',
      description: 'The Landlocked Surfers sind nicht nur zwei Vagabunde. Wir können auch hochqualitative Arbeit anbieten. Egal ob T-Shirt Design oder eine moderne Web-App.',
      keywords: 'T-Shirt, Design, Web-App, Website'
    }
  },
  { path: '/:pathMatch(.*)', component: Index }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

router.beforeEach((to) => {
  const store = blogStore()
})
