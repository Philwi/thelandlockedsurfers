import { callGetBlogPostEntriesFromContentful } from '@/plugins/contentful'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from '@/plugins/router/index.js'
import initSentry from '@/plugins/sentry/init.js'
import VueSocialSharing from 'vue-social-sharing'
import App from './App.vue'
import './index.css'

const pinia = createPinia()
const app = createApp(App)
// mount pinia before router because of when the store is defined
// its in the router navigation stuff
app.use(pinia)
app.use(router)
app.use(VueSocialSharing)
initSentry(app, router)
app.mount('#app')
callGetBlogPostEntriesFromContentful()
