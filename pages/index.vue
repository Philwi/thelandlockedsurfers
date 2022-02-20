<template lang="pug">
.home
  HeroStage
  ImageAndText
  ImageAndText(layoutAlignment="right")
</template>

<script lang="ts">
import Vue from 'vue'
import ImageAndText from '~/components/content/ImageAndText.vue'
import HeroStage from '~/components/heroStage/HeroStage.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    HeroStage, ImageAndText
  }
})
</script>
