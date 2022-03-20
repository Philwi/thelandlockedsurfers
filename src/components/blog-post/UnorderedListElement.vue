<template lang="pug">
ul.mb-5.pb-6.bg-white
  template(v-for="list in textElement.content")
    li.font-pt-serif.list-disc.italic.text-md.ml-8(class="md:ml-16") {{ getValueFromTextElement(list) }}
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
    }
  },
  methods: {
    getValueFromTextElement(list) {
      return list?.content[0]?.content[0]?.value
    }
  }
})
</script>

