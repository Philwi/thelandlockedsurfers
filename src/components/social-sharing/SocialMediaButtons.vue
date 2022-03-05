<template lang="pug">
.flex.flex-wrap.py-6
  div(v-for="(network, index) in networks" :key="index")
    ShareNetwork(
      :network="network.network"
      :key="network.network"
      :style="{backgroundColor: network.color}"
      :url="sharing.url"
      :title="sharing.title"
      :description="sharing.description"
      :media="WomoImage"
    )
      component(:is="network.name" :style="styleFromColor(network.color)").h-12.w-12
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { rootStore } from '@/plugins/store'
import { Email, Facebook,  Pinterest, Quora, Reddit, Telegram, Twitter, Whatsapp, Xing  } from 'mdue'
import WomoImage from '@/assets/womo-zeichnung-color.png'

export default defineComponent({
  setup() {
    const currentPageStore = rootStore()

    return { currentPageStore }
  },
  components: {
    Email, Facebook, Pinterest, Quora, Reddit, Telegram, Twitter, Whatsapp, Xing
  },
  data() {
    return {
      networks: [
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: '#333333' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: '#1877f2' },
        { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
        { network: 'quora', name: 'Quora', icon: 'fab fah fa-lg fa-quora', color: '#a82400' },
        { network: 'reddit', name: 'Reddit', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: '#0088cc' },
        { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: '#25d366' },
        { network: 'xing', name: 'Xing', icon: 'fab fah fa-lg fa-xing', color: '#026466' },
      ]
    }
  },
  methods: {
    styleFromColor(color: string): string {
      return `color: ${color}`
    }
  },
  computed: {
    sharing(): object {
      return this.currentPageStore.getCurrentPage
    }
  }
})
</script>

