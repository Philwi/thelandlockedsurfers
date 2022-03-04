<template lang="pug">
section.bg-black.sectionSize
  .mb-4
    img.h-12(src='../../assets/Logo_white.png' alt='Logo')
  .flex.mb-8.text-white.text-xl
    a(href='mailto:thelandlockedsurfers@gmail.com')
      Gmail.mx-2
    a(href='https://www.instagram.com/memoriesofmad' target="_blank")
      Instagram.mx-2
  .text-white.font-montserrat.text-sm
    | &copy; {{ currentYear }} The Landlocked Surfers. All rights reserved
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Gmail, Instagram } from 'mdue'

export default defineComponent({
  components: {
    Gmail, Instagram
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

