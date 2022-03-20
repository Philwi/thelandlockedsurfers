<template lang="pug">
.font-sans.leading-normal.tracking-normal
  BlogTopElement
  .container.px-4.max-w-6xl.mx-auto(class='-mt-32 md:px-0')
    .mx-0(class='sm:mx-6')
      template(v-if="store?.getBlogEntries?.length > 0")
        FirstMainElement(:blogEntry="store.blogEntries[0]")
        .flex.flex-wrap.justify-between.pt-12.-mx-6
          // render first 1-3
          ThreeElements(:blogEntries="elementsForThreeElements")
          // render 4-5
          TwoElements(:blogEntries="elementsForTwoElements")
          // render 6-7
          RightMoreSpaceThanLeft(:blogEntries="elementsForRightMoreSpaceThanLeft")
          // render the rest
          template(v-for="blogEntry in restElements")
            CardForIndex(:blogEntry="blogEntry")
</template>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import BlogTopElement from '@/components/blog/BlogTopElement.vue'
import CardForIndex from '@/components/blog/CardForIndex.vue'
import FirstMainElement from '@/components/blog/FirstMainElement.vue'
import RightMoreSpaceThanLeft from '@/components/blog/RightMoreSpaceThanLeft.vue'
import ThreeElements from '@/components/blog/ThreeElements.vue'
import TwoElements from '@/components/blog/TwoElements.vue'

export default defineComponent({
  name: 'BlogIndexPage',
  components: {
    BlogTopElement, CardForIndex, FirstMainElement, ThreeElements, TwoElements, RightMoreSpaceThanLeft
  },
  setup() {
    const store = blogStore()

    return { store }
  },
  computed: {
    elementsForThreeElements() {
      return this.store.blogEntries.slice(1, 4)
    },
    elementsForTwoElements() {
      return this.store.blogEntries.slice(4, 6)
    },
    elementsForRightMoreSpaceThanLeft() {
      return this.store.blogEntries.slice(6, 8)
    },
    restElements() {
      const lengthBlogEntries = this.store.blogEntries.length
      return this.store.blogEntries.slice(8, lengthBlogEntries - 1)
    }
  }
})
</script>

