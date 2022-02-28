<template lang="pug">
section.sectionSize.bg-secondary
  div
    h2.secondaryTitle.bg-underline3(class='bg-100%') Features
  div(class='md:grid md:grid-cols-2 md:grid-rows-2')
    template(v-for="textWithIconElement in textWithIconElements")
      TextWithIcon(:iconSrc="textWithIconElement.src" :headline="textWithIconElement.headline" :text="textWithIconElement.text")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TextWithIcon from '@/components/sections/features/TextWithIcon.vue'

export default defineComponent({
  components: {
    TextWithIcon
  },
  data() {
    return {
      textWithIconElements: [
        {
          src: 'logos/Heart.svg',
          headline: 'Feature A',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptate praesentium tenetur earum repellendus! Dicta culpa consequuntur saepe quibusdam labore, est ex ducimus tempore, quos illum officiis, pariatur ea placeat.'

        },
        {
          src: 'logos/Heart.svg',
          headline: 'Feature A',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptate praesentium tenetur earum repellendus! Dicta culpa consequuntur saepe quibusdam labore, est ex ducimus tempore, quos illum officiis, pariatur ea placeat.'

        },
        {
          src: 'logos/Heart.svg',
          headline: 'Feature A',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptate praesentium tenetur earum repellendus! Dicta culpa consequuntur saepe quibusdam labore, est ex ducimus tempore, quos illum officiis, pariatur ea placeat.'

        },
        {
          src: 'logos/Heart.svg',
          headline: 'Feature A',
          text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam voluptate praesentium tenetur earum repellendus! Dicta culpa consequuntur saepe quibusdam labore, est ex ducimus tempore, quos illum officiis, pariatur ea placeat.'

        }
      ]
    }
  },
  setup() {

  }
})
</script>

