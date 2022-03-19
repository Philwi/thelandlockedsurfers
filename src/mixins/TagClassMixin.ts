export const TagClassMixin = {
  computed: {
    decideClassFromTagName() {
      switch (this.tagName) {
        case 'womo':
          return { bg: '!bg-yellow-200', text: '!text-yellow-800' }
        case 'traveling':
          return { bg: '!bg-green-200', text: '!text-green-800' }
        case 'cat':
          return { bg: '!bg-red-200', text: '!text-red-800' }
        case 'music':
          return { bg: '!bg-purple-200', text: '!text-purple-800' }
        case 'route':
          return { bg: '!bg-blue-200', text: '!text-white-800' }
        case 'fitness':
          return { bg: '!bg-orange-200', text: '!text-orange-800' }
        case 'surfskate':
          return { bg: '!bg-pink-200', text: '!text-pink-800' }
        case 'surfen':
          return { bg: '!bg-lime-200', text: '!text-lime-800' }
        default:
          return { bg: '!bg-gray-200', text: '!text-gray-800' }
      }
    }
  }
}

