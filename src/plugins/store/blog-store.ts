import { defineStore } from 'pinia'
import { BlogEntry } from '@/types'

export const blogStore = defineStore('blogStore', {
  state: () => {
    return {
      blogEntries: [] as BlogEntry[],
      searchTags: [] as string[],
      searchTitle: ''
    }
  },
  getters: {
    getBlogEntries(state) {
      return state.blogEntries
    },
    filteredBlogEntries(state) {
      return filterBlogEntriesByTagAndTitle(state.blogEntries, state.searchTags, state.searchTitle)
    },
    allTags(state) {
      const tags = [] as string[]

      state.blogEntries.forEach(blogEntry => {
        blogEntry.metadata.tags.forEach(tag => {
          tags.push(tag.sys.id)
        })
      })

     return [...new Set(tags)]
    }
  },
  actions: {
    setBlogEntry(blogEntry: BlogEntry) {
      this.blogEntries.push(blogEntry)
    },
    setSearchTitle(searchTitle: string) {
      this.searchTitle = searchTitle
    },
    addSearchTag(searchTag: string) {
      this.searchTags.push(searchTag)
    },
    removeSearchTag(searchTag: string) {
      this.searchTags = this.searchTags.filter(tag => tag !== searchTag)
    },
    removeAllSearchTags() {
      this.searchTags = []
    },
    removeSearchTitle() {
      this.searchTitle = ''
    }
  }
})

export function filterBlogEntriesByTagAndTitle(blogEntries: BlogEntry[], searchTags: string[], searchTitle: string) {
  return blogEntries.filter(blogEntry => {
    if (!searchTagsIncluded(blogEntry, searchTags)) return false
    if (!searchTitleIncluded(blogEntry, searchTitle)) return false

    return true
  })
}

function searchTagsIncluded(blogEntry: BlogEntry, searchTags: string[]) {
  if (searchTags.length > 0) return matchSearchTags(blogEntry, searchTags)

  return true
}

function matchSearchTags(blogEntry: BlogEntry, searchTags: string[]) {
  const tags = blogEntry.metadata.tags.map(tag => tag.sys.id)
  if (tags.length === 0) return false

  return searchTags.every(searchTag => tags.includes(searchTag))
}

function searchTitleIncluded(blogEntry: BlogEntry, searchTitle: string) {
  if (searchTitle.length > 0) return matchSearchTitle(blogEntry, searchTitle)

  return true
}

function matchSearchTitle(blogEntry: BlogEntry, searchTitle: string) {
  const headline = blogEntry.fields?.headline?.toLowerCase()
  return headline ? headline.includes(searchTitle.toLowerCase()) : false
}
