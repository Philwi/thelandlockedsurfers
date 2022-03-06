<template lang="pug">
h2.text-xl.mb-5.py-6.font-bold.font-pt-serif(class='md:text-3xl') {{ text }}
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

