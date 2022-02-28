<template lang="pug">
section.bg-black.sectionSize
  .mb-4
    img.h-4(src='../../assets/Logo_white.svg' alt='Logo')
  .flex.mb-8
    a(href='www.facebook.com/the_landlocked_surfers' target="_blank")
      img.mx-4(src='../../assets/logos/Facebook.svg' alt='Facebook logo')
    a(href='www.youtube.com/the_landlocked_surfers' target="_blank")
      img.mx-4(src='../../assets/logos/Youtube.svg' alt='Youtube logo')
    a(href='www.instagram.com/the_landlocked_surfers' target="_blank")
      img.mx-4(src='../../assets/logos/Instagram.svg' alt='Instagram logo')
    a(href='www.twitter.com/the_landlocked_surfers' target="_blank")
      img.mx-4(src='../../assets/logos/Twitter.svg' alt='Twitter logo')
  .text-white.font-montserrat.text-sm
    | &copy; {{ currentYear }} The Landlocked Surfers. All rights reserved
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
})
</script>

