import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { blogStore } from '@/plugins/store'
import BlogEntriesJson from '../fixtures/blog-store/blog-entries.json'

describe('Counter Store', () => {
  let store: any

  beforeEach(() => {
    setActivePinia(createPinia())

    store = blogStore()
    store.blogEntries = BlogEntriesJson.map(entry => entry._custom.value)
  })

  it('filters blog posts according to title', () => {
    expect(store.filteredBlogEntries.length).toEqual(5)

    store.setSearchTitle('Womo')
    expect(store.filteredBlogEntries.length).toEqual(1)
  })

  it('filters blog posts according to title caseinsensitive', () => {
    store.setSearchTitle('womo')
    expect(store.filteredBlogEntries.length).toEqual(1)
  })

  it('filters blog posts according to tags', () => {
    store.addSearchTag('womo')
    expect(store.filteredBlogEntries.length).toEqual(4)

    store.addSearchTag('cat')
    expect(store.filteredBlogEntries.length).toEqual(2)
  })

  it('filters blog posts according to title and tags', () => {
    store.setSearchTitle('Womo')
    expect(store.filteredBlogEntries.length).toEqual(1)
    store.addSearchTag('fitness')
    expect(store.filteredBlogEntries.length).toEqual(1)
    store.addSearchTag('womo')
    expect(store.filteredBlogEntries.length).toEqual(1)
    store.setSearchTitle('märz')
    expect(store.filteredBlogEntries.length).toEqual(0)
    store.setSearchTitle('')
    expect(store.filteredBlogEntries.length).toEqual(1)
    store.removeSearchTag('womo')
    expect(store.filteredBlogEntries.length).toEqual(2)
  })
})
