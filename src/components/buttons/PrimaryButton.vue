<template lang="pug">
RouterLink.bg-black.px-6.py-4.rounded-lg.border-2.border-black.border-solid.text-white.mr-2.mb-2.cursor-pointer(
  :to="path" type="button"
  )
  | {{ text }}

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PrimaryButton',
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

