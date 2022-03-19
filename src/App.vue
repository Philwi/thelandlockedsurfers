<template lang="pug">
TheHeader
RouterView
TheFooter
SocialSharing
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { SeoMixin } from '@/mixins'
import SocialSharing from '@/components/social-sharing/SocialSharing.vue'
import TheHeader from '@/components/the-header/TheHeader.vue'
import TheFooter from '@/components/the-footer/TheFooter.vue'

export default defineComponent({
  components: {
    TheHeader, TheFooter, SocialSharing
  },
  mixins: [SeoMixin]
})
</script>

<style>
html, body {
  overflow-x: hidden;
}
</style>
