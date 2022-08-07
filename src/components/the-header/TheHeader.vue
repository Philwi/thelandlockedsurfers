<template lang="pug">
nav.fixed.flex.justify-between.py-6.w-full.px-4.content-center.bg-secondary.z-20(class='lg:px-48 md:px-12')
  .flex.items-center
    RouterLink(to="/")
      img.h-8(src='../../assets/Logo_black.webp' alt='Logo')
  ul.font-montserrat.items-center.hidden(class='md:flex')
    template(v-for="link in navigationLinks")
      li.growing-underline.mx-3
        template(v-if="link.target")
          a(:href='link.path' :target="link.target") {{ link.text }}
        template(v-else)
          RouterLink(:to='link.path') {{ link.text }}
  #showMenu.cursor-pointer(class='md:hidden' @click="toggleMenu")
    img(src='../../assets/logos/Menu.svg' alt='Menu icon')
#mobileNav.hidden.px-4.py-6.fixed.top-0.left-0.h-full.w-full.bg-secondary.z-20.animate-fade-in-down
  #hideMenu.flex.justify-end.cursor-pointer(@click="toggleMenu")
    img.h-16.w-16(src='../../assets/logos/Cross.svg' alt='')
  ul.font-montserrat.flex.flex-col.mx-8.my-24.items-center.text-3xl
    template(v-for="link in navigationLinks")
      li.my-6
        template(v-if="link.text == 'Shop'")
          a(:href="link.path" @click="toggleMenu" target="_blank" rel="nofollow") {{ link.text }}
        template(v-else)
          RouterLink(:to='link.path' @click="toggleMenu") {{ link.text }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      navigationLinks: [
        {
          text: 'Home',
          path: '/'
        },
        {
          text: 'Blog',
          path: '/blog'
        },
        {
          text: 'Unsere Route',
          path: '/unsere-route'
        },
        {
          text: 'Wir für Euch',
          path: '/wir-fuer-euch'
        },
        {
          text: 'Shop',
          path: 'https://saltypotato1.myspreadshop.de',
          target: '_blank'
        },
      ],
      hideMenu: true,
    }
  },
  methods: {
    toggleMenu() {
      this.hideMenu = !this.hideMenu

      if (this.hideMenu) {
        document.querySelector('#mobileNav')?.classList.add('hidden')
      } else {
        document.querySelector('#mobileNav')?.classList.remove('hidden')
      }
    }
  }
})
</script>

<style scoped>
nav {
  width: 100vw !important;
}
</style>
