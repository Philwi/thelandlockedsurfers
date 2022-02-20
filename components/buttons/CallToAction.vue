<template lang="pug">
NuxtLink.call-to-action.bg-primary.text-secondary.rounded-md.py-2.px-4.text-3lg.my-2.border-2(
  to="buttonPath" class="hover:bg-secondary hover:text-primary hover:border-primary transition ease-in-out delay-150"
  )
  | {{ buttonText }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CallToActionButton',
  props: {
    buttonText: {
      required: true,
      type: String
    },
    buttonPath: {
      required: true,
      type: String
    },
  }
})
</script>
<style scoped>
.call-to-action {
  font-family: 'Permanent Marker';
  display: table;
}
</style>
