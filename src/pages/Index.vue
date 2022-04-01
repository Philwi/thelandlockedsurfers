<template lang="pug">
HeroStage
HowItWorks
WaveWithContent(
  :mainColorCssClass="topWaveWithImageProps.mainColorCssClass"
  :secondaryColorCssClass="topWaveWithImageProps.secondaryColorCssClass"
  :svgFillColor="topWaveWithImageProps.svgFillColor"
  )
  VLazyImage.h-128.z-10.object-contain(:src="topWaveWithImageProps.imageSrc")
TextElementsWithIcon
WaveBlog
Merch
WaveWithContent(
  :mainColorCssClass="bottomWaveWithImageProps.mainColorCssClass"
  :secondaryColorCssClass="bottomWaveWithImageProps.secondaryColorCssClass"
  :svgFillColor="bottomWaveWithImageProps.svgFillColor"
  )
  VLazyImage.h-128.z-10.object-contain(:src="bottomWaveWithImageProps.imageSrc")
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
import WaveWithContent from '@/components/sections/WaveWithContent.vue'
import IceBear from '@/assets/ice_bear.png'
import Waschbaer from '@/assets/waschbaer.png'
import VLazyImage from "v-lazy-image"

export default defineComponent({
  name: 'IndexPage',
  components: {
    FAQ, TextElementsWithIcon, HeroStage, HowItWorks, Merch, WaveBlog, WaveWithContent, VLazyImage
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
