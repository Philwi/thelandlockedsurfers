import { defineStore } from 'pinia'
import { BlogEntry } from '@/types'

export const blogStore = defineStore('blogStore', {
  state: () => {
    return {
      blogEntries: [] as BlogEntry[],
      authors: []
    }
  },
  getters: {
    getBlogEntries(state) {
      return state.blogEntries
    },
  },
  actions: {
    setBlogEntry(blogEntry: BlogEntry) {
      this.blogEntries.push(blogEntry)
    },
  }
})
