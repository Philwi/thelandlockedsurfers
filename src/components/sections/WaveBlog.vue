<template lang="pug">
section.bg-black.text-white.sectionSize.pb-12
  div
    h2.secondaryTitle.bg-underline2(class='bg-100%') Die neuesten Blogeinträge
  .flex.flex-wrap.justify-between.pt-12.-mx-6
    template(v-if="!!store.getBlogEntries")
      ThreeElements(:blogEntries="lastBlogEntries")
</template>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import ThreeElements from '@/components/blog/ThreeElements.vue'

export default defineComponent({
  components: {
    ThreeElements
  },
  setup() {
    const store = blogStore()

    return { store }
  },
  computed: {
    lastBlogEntries() {
      return this.store.getBlogEntries.slice(0, 3)
    }
  },
})
</script>

