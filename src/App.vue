<template lang="pug">
TheHeader
RouterView
TheFooter
</template>>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import TheHeader from '@/components/the-header/TheHeader.vue'
import TheFooter from '@/components/the-footer/TheFooter.vue'

export default defineComponent({
  setup() {
    const store = blogStore()
    return { store }
  },
  components: {
    TheHeader, TheFooter
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = this.buildTitle(to)
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
    }
  },
})
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
