<template lang="pug">
template(v-if="anotherPage")
  a.px-6.py-4.border-2.border-black.border-solid.rounded-lg.cursor-pointer(:href="path" target="_blank" type="button")
    | {{ text }}
template(v-else)
  RouterLink.px-6.py-4.border-2.border-black.border-solid.rounded-lg.cursor-pointer(:to="path" type="button")
    | {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SecondaryButton',
  props: {
    anotherPage: {
      required: true,
      type: Boolean
    },
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
