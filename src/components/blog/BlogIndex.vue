<template lang="pug">

.flex.w-full.flex-col(class='xl:flex-row')
  template(v-for="blogEntry in store.blogEntries")
    Card(
      :headline='blogEntry.fields.headline'
      :imageSrc="blogEntry.fields.image_1"
      :price=""
      topAlignment="0"
      :url="blogEntry.path"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { blogStore } from '@/plugins/store'
import Card from '@/components/sections/pricing/Card.vue'

export default defineComponent({
  setup() {
    const store = blogStore()
  },
  components: {
    Card
  }
})
</script>

