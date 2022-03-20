<template lang="pug">
template(v-for="element in textElements")
  template(v-if="element.elementType == 'paragraph' && !!element.text")
    p.pb-12 {{ element.text }}
  template(v-if="element.elementType == 'hyperlink'")
    a.pb-12.underline.cursor-pointer.block.text-center(:href="element.href" target="_blank" rel="nofollow") {{ element.text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    textElement: {
      type: Object,
      required: true,
      content: {
        type: Array
      }
    }
  },
  data() {
    return {
      textElements: []
    }
  },
  created() {
    this.textElement.content.forEach(content => {
      let element = { elementType: '', text: '', href: '' }
      switch (content.nodeType) {
        case 'text':
          element['elementType'] = 'paragraph'
          element['text'] = content.value
        break;
        case 'hyperlink':
          element['elementType'] = 'hyperlink'
          element['text'] = content.content[0].value
          element['href'] = content.data.uri
        }

      this.textElements.push(element)
      }
    )
  }
})
</script>

