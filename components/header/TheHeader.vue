<template lang="pug">
nav.relative(class="h-20 md:h-26 lg:h-32 xl:h-48")
  svg.absolute(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320")
    path(fill="#000b76" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,128C384,139,480,117,576,122.7C672,128,768,160,864,154.7C960,149,1056,107,1152,90.7C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z")
  .absolute.left-0.py-2.pl-2.text-secondary.text-4xl
    p
      | The Landlocked Surfers Logo
  ul.absolute.right-0.py-2.pr-2
    template(v-for="navLink in navigation")
      li.inline-block.mx-3.text-secondary.text-4xl
        NuxtLink(:to="navLink.path") {{ navLink.text }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheHeader',
  data() {
    return {
      navigation:
        [
          {
            text: 'Home',
            path: '/'
          },
          {
            text: 'Blog',
            path: '/blog'
          },
          {
            text: 'Fitness',
            path: '/fitness'
          },
          {
            text: 'Shop',
            path: '/shop'
          }
        ]
    }
  }
})
</script>

<style scoped>
nav {
  z-index: 2;
}
li {
  font-family: 'Permanent Marker';
}

p {
  font-family: 'Permanent Marker';
}

</style>
