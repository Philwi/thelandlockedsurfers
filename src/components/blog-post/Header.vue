<template lang="pug">
.text-center.pt-24(class='md:pt-32')
  p.text-sm.text-green-500.font-bold(class='md:text-base')
    | {{ createdAtOnlyDate }}
  h1.font-bold.break-normal.text-3xl(class='md:text-5xl') {{ headline }}
.container.w-full.max-w-6xl.mx-auto.bg-white.bg-cover.mt-8.rounded.object-contain(:style="styleWithImage")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogPostHeader',
  props: {
    headline: {
      type: String,
      required: true
    },
    createdAt: {
      type: String,
      required: true
    },
    previewImageUrl: {
      type: String,
      required: true
    }
  },
  computed: {
    styleWithImage() {
      return `background-image:url('${this.previewImageUrl}'); height: 75vh;`
    },
    createdAtOnlyDate() {
      return this.createdAt.split(', ')[0]
    }
  }
})
</script>

