<template lang="pug">
template(v-for="element in textElements")
  component(:is="decideWhichComponentToRender(element.elementType)" :element="element" :class="decideDisplayInline(element)")
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ParagraphTextElementor, SpecialFontTextElementor, HyperlinkTextElementor } from '@/classes'
import ParagraphElement from '@/components/blog-post/text-elements/ParagraphElement.vue'
import HyperlinkElement from '@/components/blog-post/text-elements/HyperlinkElement.vue'
import SpecialFontTextElement from '@/components/blog-post/text-elements/SpecialFontTextElement.vue'

export default defineComponent({
  components: {
    SpecialFontTextElement, HyperlinkElement, ParagraphElement
  },
  data() {
    return {
      textElements: []
    }
  },
  props: {
    textElement: {
      type: Object,
      required: true,
      content: {
        type: Array
      }
    }
  },
  created() {
    this.textElement.content.forEach(textElementData => {
      this.textElements.push(this.buildTextElement(textElementData))
    })
  },
  methods: {
    buildTextElement(textElementData): object {
      switch (textElementData.nodeType) {
        case 'text':
          return this.getTextElement(textElementData)
        case 'hyperlink':
          return new HyperlinkTextElementor(textElementData.content[0].value, textElementData.data.uri)
        }
    },
    getTextElement(textElementData): object {
      if (textElementData.marks[0]?.type == 'bold') {
        return new SpecialFontTextElementor(textElementData.value, 'font-bold')
      } else if (textElementData.marks[0]?.type == 'italic') {
        return new SpecialFontTextElementor(textElementData.value, 'italic')
      } else {
        return new ParagraphTextElementor(textElementData.value)
      }
    },
    decideDisplayInline(aTextElement) {
      if (aTextElement.text.length > 0) return 'inline'
    },
    decideWhichComponentToRender(elementType): string {
      console.log(elementType)
      switch (elementType) {
        case 'paragraph':
          return 'ParagraphElement'
        case 'hyperlink':
          return 'HyperlinkElement'
        case 'special':
          return 'SpecialFontTextElement'
      }
    }
  }
})
</script>

