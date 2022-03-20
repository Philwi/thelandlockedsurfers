<template lang="pug">
.fixed.z-10.inset-0.overflow-y-auto(aria-labelledby='modal-title' role='dialog' aria-modal='true')
  .flex.items-end.justify-center.min-h-screen.pt-4.px-4.pb-20.text-center(class='sm:block sm:p-0')
    .fixed.inset-0.bg-gray-500.bg-opacity-75.transition-opacity(aria-hidden='true' @click="closeOverlay")
    span.hidden(class='sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true') &ZeroWidthSpace;
    .relative.inline-block.align-bottom.bg-white.rounded-lg.text-left.overflow-hidden.shadow-xl.transform.transition-all(class='sm:my-8 sm:align-middle sm:max-w-lg sm:w-full')
      .bg-white.px-4.pt-5.pb-4(class='sm:p-6 sm:pb-4')
        div(class='sm:flex sm:items-start')
          .mt-3.text-center(class='sm:mt-0 sm:ml-4 sm:text-left')
            h3#modal-title.text-lg.leading-6.font-medium.text-gray-900 Teile diese Seite auf einer Social Media Plattform!
            slot
      .bg-gray-50.px-4.py-3(class='sm:px-6 sm:flex sm:flex-row-reverse')
        button.mt-3.w-full.inline-flex.justify-center.rounded-md.border.border-gray-300.shadow-sm.px-4.py-2.bg-white.text-base.font-medium.text-gray-700(type='button' class='hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm' @click="closeOverlay") Schließen
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialMediaButtonOverlay',
  emits: ['closeOverlay'],
  methods: {
    closeOverlay() {
      this.$emit('closeOverlay')
    }
  }
})
</script>

