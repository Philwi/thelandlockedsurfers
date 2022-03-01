<template lang="pug">
img.container.w-full.max-w-6xl.mx-auto.bg-white.bg-cover.mt-8.rounded.object-contain.my-12(:src="imageSrcUrl")
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
    imageSrcUrl() {
      return this.textElement.data.target.fields.file.url
    }
  }
})
</script>

