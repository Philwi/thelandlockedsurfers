<template lang="pug">
nav.fixed.flex.justify-between.py-6.w-full.px-4.content-center.bg-secondary.z-10(class='lg:px-48 md:px-12')
  .flex.items-center
    img.h-4(src='../../assets/Logo_black.svg' alt='Logo')
  ul.font-montserrat.items-center.hidden(class='md:flex')
    li.mx-3
      a.growing-underline(href='howitworks')
        | How it works
    li.growing-underline.mx-3
      a(href='features') Features
    li.growing-underline.mx-3
      a(href='pricing') Pricing
  .font-montserrat.hidden(class='md:block')
    button.mr-6 Login
    button.py-2.px-4.text-white.bg-black.rounded-3xl
      | Signup
  #showMenu(class='md:hidden')
    img(src='../../assets/logos/Menu.svg' alt='Menu icon')
#mobileNav.hidden.px-4.py-6.fixed.top-0.left-0.h-full.w-full.bg-secondary.z-20.animate-fade-in-down
  #hideMenu.flex.justify-end
    img.h-16.w-16(src='../../assets/logos/Cross.svg' alt='')
  ul.font-montserrat.flex.flex-col.mx-8.my-24.items-center.text-3xl
    li.my-6
      a(href='howitworks') How it works
    li.my-6
      a(href='features') Features
    li.my-6
      a(href='pricing') Pricing
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>

