<template lang="pug">
template(v-for="blogEntry in blogEntries")
  CardForIndex(:blogEntry="blogEntry" responsiveClass="md:w-1/3")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardForIndex from '@/components/blog/CardForIndex.vue'

export default defineComponent({
  props: {
    blogEntries: {
      type: Array,
      required: true
    }
  },
  components: { CardForIndex }
})
</script>

