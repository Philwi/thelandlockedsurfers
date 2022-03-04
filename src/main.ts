import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './index.css'
import { router } from '@/plugins/router/index.js'
import { initContentfulEntries } from '@/plugins/contentful'
import initSentry from '@/plugins/sentry/init.js'

const pinia = createPinia()
const app = createApp(App)
// mount pinia before router because of when the store is defined
// its in the router navigation stuff
app.use(pinia)
app.use(router)
initSentry(app, router)

app.mount('#app')

initContentfulEntries()
