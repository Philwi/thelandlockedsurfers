import { createClient } from 'contentful'
import { blogStore } from '../store/blog-store'
import axios from 'axios'

const PRODUCT_CONTENT_TYPE_ID = 'blogPost'
const CONTENTFUL_API_TOKEN = import.meta.env?.VITE_CONTENTFUL_API_TOKEN || process.env.VITE_CONTENTFUL_API_TOKEN
const CONTENTFUL_SPACE_ID = import.meta.env?.VITE_CONTENTFUL_SPACE_ID || process.env.VITE_CONTENTFUL_SPACE_ID


const contentfulClient = createClient({
  accessToken: CONTENTFUL_API_TOKEN,
  space: CONTENTFUL_SPACE_ID
})

export const callGetBlogPostEntriesFromContentful = async () => {
  if (import.meta.env.MODE == 'development') {
    const entryObject = await getBlogPostsFromContentful()
    saveEntriesToStore(entryObject)
  } else {
    axios.get('/.netlify/functions/getContentfulBlogPosts').then(
      function (response) {
        saveEntriesToStore(response.data)
      }
    ).catch(function (error) {
      console.error(error)
    })
  }
}

export const getBlogPostsFromContentful = () => {
  const entryObject = contentfulClient.getEntries({
    content_type: PRODUCT_CONTENT_TYPE_ID
  }).then(response => {
    if (response) return response
    console.error('entriesObject is empty')
  })

  return entryObject
}

const saveEntriesToStore = (entries) => {
  const store = blogStore()
  entries?.items?.forEach(entry => {
    store.setBlogEntry(entry)
  })
}
