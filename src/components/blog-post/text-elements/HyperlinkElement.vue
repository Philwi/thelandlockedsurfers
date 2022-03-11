<template lang="pug">
a.pb-12.underline.cursor-pointer.block.text-center(
  :href="element.href"
  target="_blank"
  rel="nofollow"
  )
  | {{ element.text }}
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
      href: {
        required: true,
        type: String
      }
    }
  }

}
</script>
