import { BlogEntry } from '@/types'

export class SeoBuilder {
  constructor(route: { meta: { title: string }, query: { id: string } }, blogEntry: BlogEntry) {
    this.route = route
    this.blogEntry = blogEntry

    this.defaultTitle = 'The Landlocked Surfers'
    this.defaultDescription = 'The Landlocked Surfers ist ein Blog über uns. Wir sind Magdalena und Philipp aus Dresden. Wir bereiten uns gerade auf unsere Atlantikreise vor. Seid dabei!'
    this.defaultKeywords = 'Landlocked, Surfern, Atlantikreise, Atlantikküste'
  }

  build() {
    return { title: this.buildTitle(), description: this.buildDescription(), keywords: this.buildKeywords() }
  }

  private buildTitle() {
    const title = this.defaultTitle
    const blogTitle = this.blogEntryTitle()

    if (blogTitle) return `${title} - ${this.route.meta.title} | ${blogTitle}`
    if (this.route.meta.title) return `${title} - ${this.route.meta.title}`
    return title
  }

  private blogEntryTitle(): string {
    return this.blogEntry?.fields?.headline || ''
  }

  private buildDescription()  {
    const blogDescription = this.blogEntryDescription()

    if (blogDescription) return blogDescription
    if (this.route.meta.description) return this.route.meta.description

    return this.defaultDescription
  }

  //TODO: encapsulate same logic for card description
  private blogEntryDescription(): string {
    if (!this.blogEntry) return ''

    const paragraphs = this.blogEntry.fields.text.content.filter(element => element.nodeType === 'paragraph')
    const text = paragraphs.map(paragraph => paragraph?.content[0]?.value)
    return text.join().substring(0, 250) + '...'
  }

  private buildKeywords() {
    if (this.route.meta.keywords) return this.route.meta.keywords

    return this.defaultKeywords
  }
}
