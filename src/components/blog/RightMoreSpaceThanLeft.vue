<template lang="pug">
template(v-for="(blogEntry, index) in blogEntries")
  template(v-if="index === 0")
    CardForIndex(:blogEntry="blogEntry" responsiveClass="md:w-2/3")
  template(v-else)
    CardForIndex(:blogEntry="blogEntry" responsiveClass="md:w-1/3")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardForIndex from '@/components/blog/CardForIndex.vue'

export default defineComponent({
  components: { CardForIndex },
  props: {
    blogEntries: {
      type: Array,
      required: true
    }
  }
})
</script>

