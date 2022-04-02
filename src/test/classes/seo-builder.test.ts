import {  describe, expect, it } from 'vitest'
import { SeoBuilder } from '@/classes'
import BlogEntriesJson from '../fixtures/blog-store/blog-entries.json'
import BlogPostRouteJson from '../fixtures/routes/blog-post-route.json'
import BlogRouteJson from '../fixtures/routes/blog-route.json'
import RootRouteJson from '../fixtures/routes/root-route.json'

describe('Counter Store', () => {
  it('should build the default seo content for root page', () => {
    const seoBuilder = new SeoBuilder(RootRouteJson)
    const { title, description, keywords } = seoBuilder.build()
    expect(title).toEqual('The Landlocked Surfers')
    expect(description).toEqual('The Landlocked Surfers ist ein Blog über uns. Wir sind Magdalena und Philipp aus Dresden. Wir bereiten uns gerade auf unsere Atlantikreise vor. Seid dabei!')
    expect(keywords).toEqual("Landlocked, Surfern, Atlantikreise, Atlantikküste")
  })

  it('should build the blog index seo content page', () => {
    const seoBuilder = new SeoBuilder(BlogRouteJson)
    const { title, description, keywords } = seoBuilder.build()

    expect(title).toEqual('The Landlocked Surfers - Blog Übersicht')
    expect(description).toEqual('Auf unserem Blog erfahrt ihr alle Neuigkeiten von uns rund um die Themen Surfen, Wohnmobil und Reisen. Unsere Katze Winnie ist immer mit dabei. :)')
    expect(keywords).toEqual("Surfen, Wohnmobil, Reisen, Katzen")
  })

  it('should build the blog post seo content', () => {
    const blogEntry = BlogEntriesJson.map(entry => entry._custom.value)[0]

    const seoBuilder = new SeoBuilder(BlogPostRouteJson, blogEntry)
    const { title, description, keywords } = seoBuilder.build()

    expect(title).toContain('The Landlocked Surfers - Blog Post | Countdown 5 Monate')
    expect(description).toContain('Kaum zu glauben, wie schnell die Zeit eigentlich vergeht und doch, warten wir schon so lang darauf!')
    expect(keywords).toEqual("Landlocked, Surfern, Atlantikreise, Atlantikküste")
  })
})
