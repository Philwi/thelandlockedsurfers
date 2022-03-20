<template lang="pug">
HeroStage
HowItWorks
WaveWithImage(
  :imageSrc="topWaveWithImageProps.imageSrc"
  :mainColorCssClass="topWaveWithImageProps.mainColorCssClass"
  :secondaryColorCssClass="topWaveWithImageProps.secondaryColorCssClass"
  :svgFillColor="topWaveWithImageProps.svgFillColor"
  )
TextElementsWithIcon
WaveBlog
Merch
WaveWithImage(
  :imageSrc="bottomWaveWithImageProps.imageSrc"
  :mainColorCssClass="bottomWaveWithImageProps.mainColorCssClass"
  :secondaryColorCssClass="bottomWaveWithImageProps.secondaryColorCssClass"
  :svgFillColor="bottomWaveWithImageProps.svgFillColor"
  )
FAQ
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FAQ from '@/components/sections/FAQ.vue'
import TextElementsWithIcon from '@/components/sections/TextElementsWithIcon.vue'
import HeroStage from '@/components/sections/HeroStage.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import Merch from '@/components/sections/Merch.vue'
import WaveBlog from '@/components/sections/WaveBlog.vue'
import WaveWithImage from '@/components/sections/WaveWithImage.vue'
import IceBear from '@/assets/ice_bear.png'
import Waschbaer from '@/assets/waschbaer.png'

export default defineComponent({
  name: 'IndexPage',
  components: {
    FAQ, TextElementsWithIcon, HeroStage, HowItWorks, Merch, WaveBlog, WaveWithImage
  },
  data() {
    return {
      topWaveWithImageProps: {
        imageSrc: IceBear,
        mainColorCssClass: 'bg-black',
        secondaryColorCssClass: 'bg-secondary',
        svgFillColor: 'black'
      },
      bottomWaveWithImageProps: {
        imageSrc: Waschbaer,
        mainColorCssClass: 'bg-secondary',
        secondaryColorCssClass: 'bg-black',
        svgFillColor: '#F4F2ED'
      }
    }
  }
})
</script>

<style scoped="">
</style>
