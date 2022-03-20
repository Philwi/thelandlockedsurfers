<template lang="pug">
.flex.items-start.font-montserrat.my-6.mr-10
  slot
  div
    h3.font-semibold.text-2xl {{ headline }}
    p {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    headline: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
})
</script>

