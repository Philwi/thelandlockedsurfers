<template lang="pug">
section.sectionSize.bg-secondary.py-12
  div
    h2.secondaryTitle.bg-underline4.mb-0(class='bg-100%') Shop
  .flex.w-full.flex-col(class='xl:flex-row')
    template(v-for="element in cardElements")
      Card(
        :headline='element.headline'
        :imageSrc="element.imageSrc"
        :topAlignment="element.topAlignment"
        :url="element.url"
      )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/sections/merch/Card.vue'
import Medusa from '@/assets/salty-potato/medusa.jpg'
import Sushi from '@/assets/salty-potato/sushi.avif'
import Ice from '@/assets/salty-potato/ice.avif'

export default defineComponent({
  name: 'MerchandiseSection',
  components: {
    Card
  },
  data() {
    return {
      cardElements: [
        {
          headline: 'Medusa T-Shirt',
          imageSrc: Medusa,
          topAlignment: '24',
          url: 'https://saltypotato1.myspreadshop.de/medusa?idea=62dd2f3f960da04313a37335'
        },
        {
          headline: 'Sushi T-Shirt',
          imageSrc: Sushi,
          topAlignment: '12',
          url: 'https://saltypotato1.myspreadshop.de/sushi+fish?idea=62d86365960da0431359b6b6'
        },
        {
          headline: 'Ice T-Shirt',
          imageSrc: Ice,
          topAlignment: '24',
          url: 'https://saltypotato1.myspreadshop.de/ice+cream+girl?idea=62d471b30e214d0b7a731785'
        }
      ]
    }
  }
})
</script>

