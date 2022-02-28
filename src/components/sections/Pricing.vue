<template lang="pug">
section.sectionSize.bg-secondary.py-0
  div
    h2.secondaryTitle.bg-underline4.mb-0(class='bg-100%') Merch
  .flex.w-full.flex-col(class='xl:flex-row')
    template(v-for="element in cardElements")
      Card(
        :headline='element.headline'
        :imageSrc="element.imageSrc"
        :price="element.price"
        :topAlignment="element.topAlignment"
        :url="element.url"
      )
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Card from '@/components/sections/pricing/Card.vue'

export default defineComponent({
  data() {
    return {
      cardElements: [
        {
          headline: 'Medusa T-Shirt',
          price: 27,
          imageSrc: 'medusa.jpg',
          topAlignment: '24',
          url: 'https://www.etsy.com/listing/953814049/medusa-t-shirt-bright'
        },
        {
          headline: 'Sushi T-Shirt',
          price: 27,
          imageSrc: 'sushi.avif',
          topAlignment: '12',
          url: 'https://www.etsy.com/listing/953818271/sushi-t-shirt'
        },
        {
          headline: 'Ice T-Shirt',
          price: 25,
          imageSrc: 'ice.avif',
          topAlignment: '24',
          url: 'https://www.etsy.com/listing/939847482/ice-back-t-shirt'
        }
      ]
    }
  },
  components: {
    Card
  }
})
</script>

