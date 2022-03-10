<template lang="pug">
p.pb-12.inline(:class="element.cssClass") {{ element.text }}
</template>

<script>
export default {
  props: {
    element: {
      required: true,
      type: Object,
      text: {
        required: true,
        type: String
      },
      cssClass: {
        required: true,
        type: String
      }
    }
  }

}
</script>
