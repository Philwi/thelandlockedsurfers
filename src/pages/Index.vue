<template lang="pug">
HeroStage
HowItWorks
Features
WaveBlog
Pricing
FAQ
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FAQ from '@/components/sections/FAQ.vue'
import Features from '@/components/sections/Features.vue'
import HeroStage from '@/components/sections/HeroStage.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import Pricing from '@/components/sections/Pricing.vue'
import WaveBlog from '@/components/sections/WaveBlog.vue'

export default defineComponent({
  components: {
    FAQ, Features, HeroStage, HowItWorks, Pricing, WaveBlog
  }
})
</script>

