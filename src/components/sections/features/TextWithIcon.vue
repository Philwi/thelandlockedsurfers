<template lang="pug">
.flex.items-start.font-montserrat.my-6.mr-10
  img.h-7.mr-4(:src='srcForPropSrc(iconSrc)' alt='')
  div
    h3.font-semibold.text-2xl {{ headline }}
    p {{ text }}
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
    iconSrc: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    srcForPropSrc(src:String): String {
      return `@/assets/${src}`
    }
  }
})
</script>

