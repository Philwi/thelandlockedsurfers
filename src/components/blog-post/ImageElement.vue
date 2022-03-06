<template lang="pug">
template(v-if="isVideo()")
  video.container.w-full.max-w-6xl.mx-auto.bg-white.bg-cover.mt-8.rounded.object-contain.my-12(
    :src="imageSrcUrl"
    autoplay=""
    loop=""
    muted=""
  )
template(v-else)
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
    imageSrcUrl(): string {
      return this.textElement.data.target.fields.file.url
    },
    contentType(): string {
      return this.textElement.data.target.fields.file.contentType
    }
  },
  methods: {
    isVideo(): boolean {
      return this.contentType.includes('video')
    }
  }
})
</script>

