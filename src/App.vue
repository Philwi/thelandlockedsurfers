<template lang="pug">
TheHeader
RouterView
TheFooter
SocialSharing
</template>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { rootStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import SocialSharing from '@/components/social-sharing/SocialSharing.vue'
import TheHeader from '@/components/the-header/TheHeader.vue'
import TheFooter from '@/components/the-footer/TheFooter.vue'

export default defineComponent({
  setup() {
    const store = blogStore()
    const currentPageStore = rootStore()
    return { currentPageStore, store }
  },
  components: {
    TheHeader, TheFooter, SocialSharing
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, _from) {
        console.log(to)
        const title = this.buildTitle(to)
        document.title = title
        this.setCurrentPageToStore(title, to.path)
      }
    }
  },
  methods: {
    buildTitle(to: { meta: { title: string }, query: { id: string } }): string {
      const title = 'The Landlocked Surfers'
      let blogTitle = ''

      if (to.query.id) {
        blogTitle = this.getBlogEntryTitle(to.query.id)
      }

      if (blogTitle) return `${title} - ${to.meta.title} | ${blogTitle}`
      if (to.meta.title) return `${title} - ${to.meta.title}`
      return title
    },
    getBlogEntryTitle(id: string): string {
      const blogEntry = this.store.getBlogEntries.find(entry => entry.sys.id === id)
      return blogEntry?.fields?.headline
    },
    setCurrentPageToStore(title: string, path: string) {
      const url = `https://www.thelandlockedsurfers.com${path}`

      const currentPage = {
        url: url,
        title: 'The Landlocked Surfers',
        description: title
      }
      this.currentPageStore.setCurrentPage(currentPage)
    }
  }
})
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
