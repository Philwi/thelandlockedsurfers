<template lang="pug">
nav.fixed.flex.justify-between.py-6.w-full.px-4.content-center.bg-secondary.z-10(class='lg:px-48 md:px-12')
  .flex.items-center
    RouterLink(to="/")
      img.h-4(src='../../assets/Logo_black.svg' alt='Logo')
  ul.font-montserrat.items-center.hidden(class='md:flex')
    template(v-for="link in navigationLinks")
      li.growing-underline.mx-3
        template(v-if="link.target")
          a(:href='link.path' :target="link.target") {{ link.text }}
        template(v-else)
          RouterLink(:to='link.path') {{ link.text }}
  // .font-montserrat.hidden(class='md:block')
    button.mr-6 Login
    button.py-2.px-4.text-white.bg-black.rounded-3xl
      | Signup
  #showMenu.cursor-pointer(class='md:hidden' @click="toggleMenu")
    img(src='../../assets/logos/Menu.svg' alt='Menu icon')
#mobileNav.hidden.px-4.py-6.fixed.top-0.left-0.h-full.w-full.bg-secondary.z-20.animate-fade-in-down
  #hideMenu.flex.justify-end.cursor-pointer(@click="toggleMenu")
    img.h-16.w-16(src='../../assets/logos/Cross.svg' alt='')
  ul.font-montserrat.flex.flex-col.mx-8.my-24.items-center.text-3xl
    template(v-for="link in navigationLinks")
      li.my-6
        template(v-if="link.text == 'Merch'")
          a(:href="link.path" @click="toggleMenu" target="_blank") {{ link.text }}
        template(v-else)
          RouterLink(:to='link.path' @click="toggleMenu") {{ link.text }}
</template>

<script setup lang="ts">
  const navigationLinks = [
    {
      text: 'Home',
      path: '/'
    },
    {
      text: 'Blog',
      path: '/blog'
    },
    // {
    //   text: 'Fitness',
    //   path: '/fitness'
    // },
    // {
    //   text: 'Ernährung',
    //   path: '/ernaehrung'
    // },
    {
      text: 'Merch',
      path: 'https://www.etsy.com/de/shop/saltypotatostore',
      target: '_blank'
    },
  ]

let hideMenu = true

const toggleMenu = function(): void {
  hideMenu = !hideMenu

  if (hideMenu) {
    document.querySelector('#mobileNav')?.classList.remove('hidden')
  } else {
    document.querySelector('#mobileNav')?.classList.add('hidden')
  }
}
  </script>

