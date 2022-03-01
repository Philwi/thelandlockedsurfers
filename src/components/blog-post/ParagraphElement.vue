<template lang="pug">
p.pb-12 {{ text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    textElement: {
      type: Object,
      required: true,
      content: {
        type: Array
      }
    }
  },
  computed: {
    text() {
      return this.textElement.content[0].value
    }
  }
})
</script>

