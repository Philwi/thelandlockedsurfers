<template lang="pug">
body.bg-secondary
  TheHeader
  Nuxt

</template>
<script lang="ts">
import Vue from 'vue'
import TheHeader from '~/components/header/TheHeader.vue'

export default Vue.extend({
  components: {
    TheHeader
  }
})
</script>
