<template lang="pug">
.text-xs.px-3.rounded-full.text-center.font-semibold(
  style='padding-top: 0.1em; padding-bottom: 0.1rem'
  :class="decideClassFromTagName.bg, decideClassFromTagName.text"
)
  slot
  .inline {{ tagName }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { TagClassMixin } from '@/mixins'

export default defineComponent({
  name: 'TagsForBlogPosts',
  mixins: [TagClassMixin],
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
})
</script>
