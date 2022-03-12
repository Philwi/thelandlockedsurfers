<template lang="pug">
section.pt-24.flex.flex-col.justify-center.text-center.px-4.bg-secondary.w-full(
  class='xl:mt-0 xl:h-full xl:flex-row xl:justify-between xl:items-center xl:px-48 md:px-12 md:mr-10'
  )
  .justify-around.p-0(class='md:block md:mt-0 xl:flex-1 basis-1/3 md:pb-16 md:p-8')
    img.justify-center.inline.h-72(src='@/assets/mountain.png' alt='Drawed Mountain' class="md:rounded-8xl lg:h-128")

    h1.font-pt-serif.text-4xl.font-bold.my-7
      | Wir können ein paar Dinge!
    .font-montserrat.mt-8
      SecondaryButton.mb-8(text="Frag uns an!" path="mailto:thelandlockedsurfers@gmail.com?subject=Anfrage" anotherPage=true)

  .justify-around.mt-8.grow(class='md:block md:mt-0 xl:flex-1')
    .flex.flex-col(class="lg:flex-row")
      div(:class="flexClass")
        AccountBoxOutline.inline.text-2xl
        h2(:class="headlineClass")
          | Logodesign
        p
          | Egal ob du eine Köchin bist oder für deine neue Punkband ein Logo benötigst. Lena kann dir individuell ein einzigartiges Logo kreieren.
          | Digital oder per Hand.
      div(:class="flexClass")
        Palette.inline.text-2xl
        h2(:class="headlineClass")
          | Illustrationen
        p
          | Lena kann viele verschiedene Stile. Brauchst du noch eine Illustration für dein nächstes Kinderbuch oder ein paar grafische Elemente
          | für deine Website. Frag uns einfach an!
    .flex.flex-col(class="lg:flex-row")
      div(:class="flexClass")
        Laptop.inline.text-2xl
        h2(:class="headlineClass")
          | Webseiten & Web-Applikationen
        p
          | Wenn du eine neue Internetpräsenz benötigst. Ein Portfolio, eine Chat-App, einen einzigartigen Blog oder die nächste große Business-Idee
          | und dafür eine PWA benötigst. Philipp kann dir dabei sicher weiterhelfen.
      div(:class="flexClass")
        TshirtVOutline.inline.text-2xl
        h2(:class="headlineClass")
          | T-Shirt Designs
        | Gefällt dir eine Arbeit von Lena besonders gut oder hast du eine einzigartige Idee für ein neues T-Shirt Design, aber dir fehlt
        | das Handwerkszeug um dieser Idee Leben einzuhauchen. Dann ist Lena die richtige Person.

</template>

<script lang="ts">
import { AccountBoxOutline, Laptop, Palette, TshirtVOutline } from 'mdue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import VLazyImage from "v-lazy-image"

export default {
  components: {
    AccountBoxOutline, Laptop, Palette, TshirtVOutline, PrimaryButton, SecondaryButton, VLazyImage
  },
  computed: {
    flexClass() {
      return 'mb-16 border-t-2 border-black border-dotted pt-4 mr-0 basis-1/2 lg:mr-16'
    },
    headlineClass() {
      return 'font-pt-serif text-2xl font-bold mb-4'
    }
  }
}
</script>
