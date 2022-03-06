<template lang="pug">
ul.mb-5.pb-6.bg-white
  template(v-for="list in textElement.content")
    li.font-pt-serif.list-disc.italic.text-md.ml-8(class="md:ml-16") {{ getValueFromTextElement(list) }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
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
  methods: {
    getValueFromTextElement(list: { content: [{content: [{value: string}]}] }) {
      return list?.content[0]?.content[0]?.value
    }
  }
})
</script>

