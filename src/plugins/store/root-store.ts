import { defineStore } from 'pinia'

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
    getCurrentPage(state): object {
      return state.currentPage
    }
  },
  actions: {
    setCurrentPage(currentPage: object) {
      this.currentPage = currentPage
    }
  }
})
