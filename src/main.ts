import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { router } from '@/plugins/router/index.js'
import { initContentfulEntries } from '@/plugins/contentful'

initContentfulEntries()

createApp(App).use(router).mount('#app')
