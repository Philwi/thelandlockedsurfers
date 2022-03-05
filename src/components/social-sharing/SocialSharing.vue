<template lang="pug">
ShareVariant.fixed.h-14.w-14.bg-secondary.text-black.rounded-full.p-2.bottom-8.right-2.border-solid.border-black.border-2.cursor-pointer(
  class="hover:rotate-45 ease-in duration-200 md:top-28 md:right-8" @click="toggleOverlay")
template(v-if="toggledOverlay")
  Overlay(@closeOverlay="toggleOverlay")
    SocialMediaButtons

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ShareVariant } from 'mdue'
import Overlay from '@/components/overlay/Overlay.vue'
import SocialMediaButtons from '@/components/social-sharing/SocialMediaButtons.vue'

export default defineComponent({
  setup() {

  },
  data() {
    return {
      toggledOverlay: false
    }
  },
  components: {
    ShareVariant, SocialMediaButtons, Overlay
  },
  methods: {
    toggleOverlay(): void {
      this.toggledOverlay = !this.toggledOverlay
    }
  }
})
</script>

