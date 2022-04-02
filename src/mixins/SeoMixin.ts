import { rootStore } from '@/plugins/store'

export let SeoMixin = {
  watch: {
    $route: {
      immediate: true,
      handler(to, _from) {
        document.title = this.buildTitle(to)
        this.description.content = this.buildDescription(to)
        this.keywords.content = this.buildKeywords(to)
        this.setCurrentPageToStore(this.buildTitle(to), to.fullPath)
      }
    }
  },
  computed: {
    defaultDescription(): string {
      return "The Landlocked Surfers ist ein Blog über uns. Wir sind Magdalena und Philipp aus Dresden. Wir bereiten uns gerade auf unsere Atlantikreise vor. Seid dabei!"
    },
    defaultKeywords(): string {
      return "Landlocked, Surfern, Atlantikreise, Atlantikküste"
    },
    description(): string {
      return document.getElementsByTagName('meta').description
    },
    keywords(): string {
      return document.getElementsByTagName('meta').keywords
    }
  },
  methods: {
    buildDescription(to: { meta: { description: string }, query: { id: string } }): string {
      if (!!to.meta.description) return to.meta.description
      return this.defaultDescription
    },
    buildKeywords(to: { meta: { keywords: string }, query: { id: string } }): string {
      if (!!to.meta.keywords) return to.meta.keywords
      return this.defaultKeywords
    },
    buildTitle(to: { meta: { title: string }, query: { id: string } }): string {
      const title = 'The Landlocked Surfers'
      let blogTitle = ''

      if (to.query.id) {
        blogTitle = this.getBlogEntryTitle(to.query.id)
      }

      if (!!blogTitle) return `${title} - ${to.meta.title} | ${blogTitle}`
      if (to.meta.title) return `${title} - ${to.meta.title}`
      return title
    },
    getBlogEntryTitle(id: string): string {
      const blogEntry = this.store.getBlogEntries.find(entry => entry.sys.id === id)
      return blogEntry?.fields?.headline
    },
    setCurrentPageToStore(title: string, path: string) {
      const currentPageStore = rootStore()
      const url = `https://www.thelandlockedsurfers.com${path}`

      const currentPage = {
        url: url,
        title: 'The Landlocked Surfers',
        description: title
      }
      currentPageStore.setCurrentPage(currentPage)
    }
  }
}

