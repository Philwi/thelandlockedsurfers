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
        component.mr-4.icon-text.h-24.w-24(:is="textWithIconElement.icon")
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
          headline: 'Surf-Fitness',
          text: 'Fitness ist uns wichtig und deswegen halten wir uns das ganze Jahr fit. In den kommenden Wochen und Monaten werden ganz bewusst für das Surfen trainieren. In unseren Blog-Posts kannst du sehen, wie unser Programm aussieht.'
        },
        {
          icon: 'Laptop',
          headline: 'Digital-Nomades',
          text: 'Mit den Zehen im Sand und den Fingern auf den Tasten. Dem Kopf im Schatten unserer Markise, die Wellen betrachten. Mit Software-Entwicklung und Grafikdesign verdienen wir unser veganes Butterbrot.'
        },
        {
          icon: 'Cat',
          headline: '#Winniethetravelcat',
          text: 'Winnie ist überall mit dabei. Unsere kleine Vierbeinerin ist eine Glückskatze! Sie ist eine gute Beifahrerin und liebt es auch durch Wälder und Dünen zu laufen. Das Leben auf Rädern ist für sie wahnsinnig aufregend!'
        },
        {
          icon: 'Caravan',
          headline: 'Autarkes Vanlife',
          text: 'Wir wohnen zu dritt auf 10m² und 6 Rädern in einem 18 Jahre alten Wohnmobil. Mit diesem können wir fast autark leben. Mit "Gas, Wasser, Scheiße" kennen wir uns mittlerweile gut aus. Wo bekommen wir Wasser her? Wo kann man die Toilette entleeren? Wo kann man gut parken? Die Antworten darauf findet ihr in unserem Blog.'

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
