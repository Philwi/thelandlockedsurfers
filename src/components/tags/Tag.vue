<template lang="pug">
.text-xs.px-3.rounded-full(
  style='padding-top: 0.1em; padding-bottom: 0.1rem'
  :class="decideClassFromTagName.bg, decideClassFromTagName.text"
)
  | {{ tagName }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    tag: {
      type: Object,
      required: true,
      sys: {
        type: Object,
        id: {
          type: String
        }
      }
    }
  },
  computed: {
    tagName() {
      return this.tag.sys.id
    },
    decideClassFromTagName() {
      switch (this.tagName) {
        case 'womo':
          return { bg: '!bg-yellow-200', text: '!text-yellow-800' }
        case 'traveling':
          return { bg: '!bg-green-200', text: '!bg-green-800' }
        case 'cat':
          return { bg: '!bg-red-200', text: '!bg-red-800' }
        case 'music':
          return { bg: '!bg-purple-200', text: '!bg-purple-800' }
        case 'route':
          return { bg: '!bg-blue-200', text: '!bg-blue-800' }
        default:
          return { bg: '!bg-gray-200', text: '!bg-gray-800' }
      }
    }
  }
})
</script>
