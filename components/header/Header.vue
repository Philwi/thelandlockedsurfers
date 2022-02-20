<template lang="pug">
nav
  svg.wave(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
    path(fill="#000b76" fill-opacity="1" d="M0,64L48,74.7C96,85,192,107,288,128C384,149,480,171,576,197.3C672,224,768,256,864,234.7C960,213,1056,139,1152,122.7C1248,107,1344,149,1392,170.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z")
  p.text-white wtf du hund
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
})
</script>

<style scoped>
nav {
  position: relative;
}

nav .wave {
  position: absolute;
}

nav p {
  position: absolute;
}
</style>
