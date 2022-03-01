<template lang="pug">
.text-center.pt-16(class='md:pt-32')
  p.text-sm.text-green-500.font-bold(class='md:text-base')
    | {{ createdAt }}
  h1.font-bold.break-normal.text-3xl(class='md:text-5xl') {{ headline }}
.container.w-full.max-w-6xl.mx-auto.bg-white.bg-cover.mt-8.rounded.object-contain(:style="styleWithImage")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },
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
    }
  }
})
</script>

