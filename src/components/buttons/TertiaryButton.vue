<template lang="pug">
nuxt-link.px-6.py-4.border-2.bg-secondary.border-secondary.text-black.border-solid.rounded-lg.cursor-pointer(:to="path" type="button")
  | {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TertiaryButton',
  props: {
    text: {
      required: true,
      type: String
    },
    path: {
      required: true,
      type: String
    }
  },
})
</script>
