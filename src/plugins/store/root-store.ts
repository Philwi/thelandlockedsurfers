import { defineStore } from 'pinia'
import { SeoPage } from '@/types'

export const rootStore = defineStore('root', {
  state: () => {
    return {
      currentPage: {
        url: 'www.thelandlockedsurfers.com',
        title: 'The Landlocked Surfers',
        description: 'The Landlocked Surfers come on!',
      }
    }
  },
  getters: {
    getCurrentPage(state) {
      return state.currentPage
    }
  },
  actions: {
    setCurrentPage(currentPage: SeoPage) {
      this.currentPage = currentPage
    }
  }
})
