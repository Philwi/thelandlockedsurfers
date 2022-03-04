<template lang="pug">
section.pt-24.flex.flex-col.justify-center.text-center.px-4.bg-secondary(class='md:mt-0 md:h-screen md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12')
  div(class='md:flex-1 md:mr-10')
    h1.font-pt-serif.text-5xl.font-bold.mb-7.flex-wrap
      | The Landlocked
      span.bg-underline1.bg-left-bottom.bg-no-repeat.pb-2(class='bg-100%')
        |  Surfers
    p.font-pt-serif.font-normal.mb-7
      | Wir hissen unsere Segel!
      | Und planen eine Reise in unserem Wohnmobil.
      | Mit unserer Katze Winnie wohnen wir seit einem Jahr mobil in und um Dresden.
      | Doch jetzt soll alles anders werden! Wir wollen in den Süden. Seid mit dabei!
    .font-montserrat
      PrimaryButton(text="Zu den Erlebnissen" path="/blog")
      SecondaryButton(text="Unterstüze uns" path='https://www.etsy.com/de/shop/saltypotatostore' anotherPage="true")
  .flex.justify-around.mt-8(class='md:block md:mt-0 md:flex-1')
    .relative
      img.absolute.-top-16.-left-10(src='../../assets/Highlight1.svg' alt='')
    img.rounded-lg(src='@/assets/womo-zeichnung-color.webp' alt='Surfer Store' class="md:rounded-8xl")
    .relative
      img.absolute.-bottom-10.-right-6(src='../../assets/Highlight2.svg' alt='')
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'

export default defineComponent({
  components: {
    PrimaryButton, SecondaryButton
  }
})
</script>

