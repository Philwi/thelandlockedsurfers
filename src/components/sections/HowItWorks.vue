<template lang="pug">
section.bg-black.text-white.sectionSize
  div
    h2.secondaryTitle.bg-underline2(class='bg-100%') Unsere Ziele
  .flex.flex-col(class='md:flex-row')
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Caravan
      h3.font-montserrat.font-medium.text-xl.mb-2 Wohnmobil abbezahlen
      p.text-center.font-montserrat
        | Wir sind dabei unser Wohnmobil abzubezahlen. Währenddessen leben wir bereits in diesem und
        | investieren unsere gesparte Miete in unser fahrbahres Domizil.
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Routes
      h3.font-montserrat.font-medium.text-xl.mb-2 Route planen
      p.text-center.font-montserrat
        | Bis jetzt sieht es so aus, als ob wir ab September nach Frankreich, Spanien und Portugal fahren.
        | Hauptsächlich wird es die Atlantikküste werden.
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Wave
      h3.font-montserrat.font-medium.text-xl.mb-2 Surfen
      p.text-center.font-montserrat
        | Vor Corona haben wir während unseres Urlaubes Surfcamps besucht. Wurden dabei angefixt und wir wollen
        | nichts anderes mehr machen.
  .font-montserrat.my-8
    TertiaryButton(text="Verfolge den Verlauf" path="/blog")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TertiaryButton from '@/components/buttons/TertiaryButton.vue'
import { Wave, Caravan, Routes } from 'mdue'

export default defineComponent({
  name: 'HowItWorks',
  components: {
    Wave, Caravan, Routes, TertiaryButton
  }
})
</script>

