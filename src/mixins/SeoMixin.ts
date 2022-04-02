import { blogStore } from '@/plugins/store'
import { rootStore } from '@/plugins/store'
import { SeoBuilder } from '@/classes'

export let SeoMixin = {
  watch: {
    $route: {
      immediate: true,
      handler(to, _from) {
        const seoBuild = new SeoBuilder(to, this.blogEntryFromId(to?.query?.id))
        const { title, description, keywords } = seoBuild.build()
        this.setCurrentPageToStore(title, to.fullPath)

        document.title = title
        document.querySelector('meta[name="description"]').setAttribute("content", description)
        document.querySelector('meta[name="keywords"]').setAttribute("content", keywords)
      }
    }
  },
  methods: {
    blogEntryFromId(id: string): any {
      const store = blogStore()

      return store.getBlogEntries.find(entry => entry.sys.id === id)
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

