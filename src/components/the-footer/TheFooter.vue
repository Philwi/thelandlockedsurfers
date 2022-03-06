<template lang="pug">
section.bg-black.sectionSize
  .mb-4
    img.h-12(src='../../assets/Logo_white.webp' alt='Logo')
  .flex.mb-8.text-white.text-xl
    a(href='mailto:thelandlockedsurfers@gmail.com' rel="nofollow")
      Gmail.mx-2
    a(href='https://www.instagram.com/memoriesofmad' target="_blank" rel="nofollow")
      Instagram.mx-2
    a(href='https://github.com/Philwi/thelandlockedsurfers' target="_blank" rel="nofollow")
      Github.mx-2
  .text-white.font-montserrat.text-sm
    | &copy; {{ currentYear }} The Landlocked Surfers. All rights reserved
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Gmail, Instagram, Github } from 'mdue'

export default defineComponent({
  components: {
    Gmail, Instagram, Github
  },
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

