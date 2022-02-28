import { defineStore } from 'pinia'

export const blogStore = defineStore('blogStore', {
  state: () => {
    return {
      blogEntries: [],
      authors: []
    }
  },
  getters: {
    getBlogEntries(state): Array {
      return state.blogEntries
    }
  },
  actions: {
    setAuthor(author) {
      this.authors.push(author)
    },
    setBlogEntry(blogEntry) {
      this.blogEntries.push(blogEntry)
    }
  }
})
