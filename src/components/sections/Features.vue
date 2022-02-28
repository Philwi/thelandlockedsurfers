<template lang="pug">
section.sectionSize.bg-secondary
  div
    h2.secondaryTitle.bg-underline3(class='bg-100%') Die Vorbereitung
  div(class='md:grid md:grid-cols-2 md:grid-rows-2')
    template(v-for="textWithIconElement in textWithIconElements")
      TextWithIcon(
        :headline="textWithIconElement.headline"
        :text="textWithIconElement.text",
      )
        component.mr-4.icon-text(:is="textWithIconElement.icon")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TextWithIcon from '@/components/sections/features/TextWithIcon.vue'
import { Cat, WeightLifter, Caravan, Laptop } from 'mdue'

export default defineComponent({
  components: {
    Cat, Caravan, TextWithIcon, WeightLifter, Laptop
  },
  data() {
    return {
      textWithIconElements: [
        {
          icon: 'WeightLifter',
          headline: 'Surf-Fit werden',
          text: 'Wir wollen uns sportlich auf ein geeignetes Level befinden. Dafür gehen wir mehrfach die Woche ins Fitness-Studio. In unseren Blogposts erfährst du mehr über geeignete Übungen.'

        },
        {
          icon: 'Laptop',
          headline: 'Digital-Nomaden Lifestyle',
          text: 'Wir können es uns nicht leisten einfach mit der Arbeit aufzuhören. Wir haben weder reiche Eltern, noch werden wir einmal viel Erben. Deswegen müssen wir uns damit beschäftigen, wie wir während der Reise auch noch Geld verdienen.'

        },
        {
          icon: 'Cat',
          headline: 'Winnie',
          text: 'Wir reisen nicht nur zu zweit, wir haben auch unsere Katze Winnie mit dabei. Wir müssen noch für die notwendigen Impfungen sorgen. Das Caravan Leben stört Sie zum Glück kaum.'
        },
        {
          icon: 'Caravan',
          headline: 'Wohnmobil fit bekommen',
          text: 'Für die Reise wollen wir unser Wohnmobil noch einmal gründlich durchchecken, damit uns nicht unterwegs böse Überraschungen treffen. Wir haben leider nicht so viel Ahnung von Autos und müssen so auf Hilfe von Anderen hoffen.'

        }
      ]
    }
  },
  setup() {

  }
})
</script>
<style scoped>
.icon-text {
  height: 5rem;
  width: 5rem;
}
</style>
