<template lang="pug">
.flex-1.flex.flex-col.mx-6.shadow-2xl.relative.bg-secondary.rounded-2xl.py-5.px-8.my-8(:class='mdTopAlignment')
  h3.font-pt-serif.font-normal.text-2xl.mb-4
    | {{ headline }}
  img.object-cover.h-72(:src='imageSourceWithAsset()')
  button(@click="goToShop").border-2.border-solid.border-black.rounded-xl.text-lg.py-3.mt-4.cursor-pointer
    | Kaufen {{ price }} €
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    headline: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
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
    mdTopAlignment(): String {
      return `md:top-${this.topAlignment}`
    }
  },
  methods: {
    imageSourceWithAsset(): String {
      // FIXME: required is not possible. so we have to do this :/
      return `/src/assets/salty-potato/${this.imageSrc}`
    },
    goToShop(): void {
      window.open(this.url, '_blank').focus()
    }
  }
})
</script>

