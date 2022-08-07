<template lang="pug">
.flex-1.flex.flex-col.mx-6.shadow-2xl.relative.bg-secondary.rounded-2xl.py-5.px-8.my-8(:class='mdTopAlignment')
  h3.font-pt-serif.font-normal.text-2xl.mb-4
    | {{ headline }}
  VLazyImage.object-cover.h-72(:src='imageSrc')
  button(@click="goToShop").border-2.border-solid.border-black.rounded-xl.text-lg.py-3.mt-4.cursor-pointer
    | Kaufen
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VLazyImage from "v-lazy-image"

export default defineComponent({
  name: 'CardComponentWithImageAndPrice',
  components: { VLazyImage },
  props: {
    headline: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    topAlignment: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  computed: {
    mdTopAlignment() {
      return `md:top-${this.topAlignment}`
    }
  },
  methods: {
    goToShop() {
      window.open(this.url, '_blank').focus()
    }
  }
})
</script>

