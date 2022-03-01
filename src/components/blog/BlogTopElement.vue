<template lang="pug">
.w-full.m-0.p-0.bg-cover.bg-bottom(:style="imageSrcAndStyling")
  .container.max-w-4xl.mx-auto.pt-32.text-center.break-normal.font-pt-serif(class='md:pt-32')
    p.text-white.font-extrabold.text-3xl.font-pt-serif.text-secondary(class='md:text-5xl')
      | The Landlocked Surfers
    p.text-xl.text-black(class='md:text-2xl') Willkommen auf unserem Blog
</template>

<script lang="ts">
import imagePath from '@/assets/surf-store.jpg'
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
  computed: {
    imageSrcAndStyling() {
      return `background-image:url('${imagePath}'); height: 60vh; max-height:460px;`
    }
  }
})
</script>

