<template lang="pug">
.pt-20.static.h-30
  video.absolute(autoplay="" muted="" loop="" class="-z-50")
    source(src="@/assets/about-us/header.webm" type="video/mp4")
  .flex.flex-wrap.justify-center.py-10
    RouterLink(to="/ueber-uns/philipp")
      img.ease-in.duration-300.h-60.cursor-pointer(src="@/assets/about-us/phil.png" class="hover:h-80")
    RouterLink(to="/ueber-uns/lena")
      img.ease-in.duration-300.h-60.cursor-pointer(src="@/assets/about-us/lena.png" class="hover:h-80")
    RouterLink(to="/ueber-uns/lena").py-24
      img.ease-in.duration-300.h-16.cursor-pointer(src="@/assets/about-us/winnie.png" class="hover:h-40")

section.bg-black.text-white.sectionSize
  div
    h2.secondaryTitle.bg-underline2(class='bg-100%') Philipp, Lena & Winnie
  .flex.flex-col(class='md:flex-row')
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Caravan
      h3.font-montserrat.font-medium.text-xl.mb-2 Wohnen im Wohnmobil
      p.text-center.font-montserrat
        | Seit Oktober 2020 leben wir im Wohnmobil. Wir haben hart Lockdowns mitgemacht. Haben Quarantäne
        | im Wohnmobil überstanden und hatten einen coolen Sommer 2021. Bis jetzt hat sich es schon gelohnt.
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Laptop
      h3.font-montserrat.font-medium.text-xl.mb-2 Unterwegs arbeiten
      p.text-center.font-montserrat
        | Philipp arbeitet weiter als Software-Entwickler. Lena wird sich als selbstständige Künstlerin versuchen.
        | Wenn ihr Ideen habt aber euch leider das Handwerk dazu fehlt, kommt gerne auf uns zu.
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Update
      h3.font-montserrat.font-medium.text-xl.mb-2 Zeitraum
      p.text-center.font-montserrat
        | Wir werden ab September 2022 unterwegs sein. Hauptsächlich geht es an die Atlantikküste. Wir werden
        | von unserem Progress und unseren Erlebnissen berichten.
  .font-montserrat.my-8
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Update, Caravan, Laptop } from 'mdue'

export default defineComponent({
  components: {
    Update, Caravan, Laptop
  },
  computed: {
    styleWithVideo() {

    }
  }
})
</script>

