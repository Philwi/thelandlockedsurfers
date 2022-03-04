<template lang="pug">
section.bg-black.text-white.sectionSize
  div
    h2.secondaryTitle.bg-underline2(class='bg-100%') Unsere Targets
  .flex.flex-col(class='md:flex-row')
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Caravan
      h3.font-montserrat.font-medium.text-xl.mb-2 Mietfrei leben
      p.text-center.font-montserrat
        | Home is where you park it. Raus aus der Wohnung und rein in die Freiheit!
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Wave
      h3.font-montserrat.font-medium.text-xl.mb-2 Surfen
      p.text-center.font-montserrat
        | Surfen haben wir in tollen Surfcamps in Portugal und Marokko kennengelernt.
        | Seitdem planen wir voller Vorfreude das nächste Surferlebnis.
        | Schaut doch mal bei
        a.font-bold(href="https://www.wavysurfcamp.com/de/" target="_blank") &ensp;Wavy Surfcamp
        | &ensp;und&ensp;
        a.font-bold(href="https://adventurekeys.com/" target="_blank") Adventurekeys
        | &ensp;vorbei
    .flex-1.mx-8.flex.flex-col.items-center.my-4
      .border-2.rounded-full.bg-secondary.text-black.h-12.w-12.flex.justify-center.items-center.mb-3
        Routes
      h3.font-montserrat.font-medium.text-xl.mb-2 Routeplanung
      p.text-center.font-montserrat
        | Wir wollen in den Süden! Frankreich, Spanien, Portugal wir kommen!
        | Unser Ziel ist die Atlantikküste. Wind, Wellen und Sand unter den Füßen.
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

