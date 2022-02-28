<template lang="pug">
.pt-24
h1 Hier gibts Neuigkeiten!
template(v-if="store?.getBlogEntries?.length > 0")
  .flex.w-full.flex-col(class='xl:flex-row')
    template(v-for="blogEntry in store?.getBlogEntries")
      Card(
        :headline='blogEntry.fields.headline'
        :imageSrc="blogEntry.fields.image_1"
        price="0"
        topAlignment="12"
        :url="blogEntry.path"
      )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { blogStore } from '@/plugins/store'
// TODO: make card more abstract
import Card from '@/components/sections/pricing/Card.vue'

export default defineComponent({
  setup() {
    const store = blogStore()

    return { store }
  },
  components: {
    Card
  }
})
</script>

