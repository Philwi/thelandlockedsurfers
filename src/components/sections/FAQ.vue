<template lang="pug">
section.sectionSize.items-start.pt-8.bg-black.text-white(class='md:pt-36')
  div
    h2.secondaryTitle.bg-highlight3.p-10.mb-0.bg-center(class='bg-100%')
      | FAQ
  .w-full.py-4.cursor-pointer(@click="toggleSubElement('contact')")
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto
        | Wie kann ich euch erreichen?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(ref="contact")
      | Einfach per Mail (thelandlockedsurfers@gmail.com) oder Socialmedia. :)
  hr.w-full.bg-white
  .w-full.py-4.cursor-pointer(@click="toggleSubElement('shop')")
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto
        | Habt ihr auch einen eigenen Shop und nicht nur Etsy?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(ref="shop")
      | Es ist in Arbeit, aber dauert noch ein bisschen.
  hr.w-full.bg-white
  .w-full.py-4.cursor-pointer(@click="toggleSubElement('support')")
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto
        | Wie kann ich euch unterstützen?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(ref="support")
      | Folge uns auf den Socialmedia Kanälen oder kaufe mal ein Shirt von uns.
  hr.w-full.bg-white
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    toggleSubElement(refElement: String): void{
      const ref = this.$refs[refElement]
      const classListAry = new Array(...ref.classList)

      if (classListAry.includes('hidden')) {
         ref.classList.remove('hidden')
      } else {
         ref.classList.add('hidden')
      }
    }
  }
})
</script>

