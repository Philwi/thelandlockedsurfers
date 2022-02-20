<template lang="pug">
.image-left-text-right.py-5.px-5
  .grid.grid-cols-1(class="lg:grid-cols-2")
    template(v-if="layoutAlignment.image === 'left'")
      .col-span-1
        img.rounded-3xl(:src="image")
      .grid.col-span-1.content-center
        .p-5(class="basis-2/4")
          h2.text-2xl.font-bold.py-2 {{ headline }}
          p(v-html="text")
          template(v-if="callToAction")
            .grid.place-items-center.h-24
              CallToActionButton(:buttonText="callToAction.buttonText" :buttonPath="callToAction.buttonPath")
    template(v-else="")
      .grid.col-span-1.content-center
        .p-5(class="basis-2/4")
          h2.text-2xl.font-bold.py-2 {{ headline }}
          p(v-html="text")
          template(v-if="callToAction")
            .grid.place-items-center.h-24
              CallToActionButton(:buttonText="callToAction.buttonText" :buttonPath="callToAction.buttonPath")
      .col-span-1
        img.rounded-3xl(:src="image")
</template>

<script lang="ts">
import Vue from 'vue'
import CallToActionButton from '~/components/buttons/CallToAction.vue'

export default Vue.extend({
  name: 'ImageAndText',
  components: {
    CallToActionButton
  },
  props: {
    headline: {
      required: true,
      type: String,
      default: 'Lorem ipsum dolor sit',
    },
    image: {
      required: true,
      type: String,
      default: 'images/surf1.jpg'
    },
    text: {
      required: true,
      type: String,
      default: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
    },
    callToAction: {
      required: false,
      type: Object
    },
    layoutAlignment: {
      required: false,
      type: Object,
      default() {
        return  {
          image: 'left'
        }
      }
    }
  }
})
</script>
<style scoped>
.image-left-text-right {
  z-index: 2;
}
</style>
