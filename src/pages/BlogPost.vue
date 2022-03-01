<template lang="pug">
template(v-if="!!blogEntry")
  BlogPostHeader(:previewImageUrl="previewImageUrl" :headline="headline" :createdAt='createdAt')
  .container.max-w-5xl.mx-auto.-mt-32
    .mx-0(class='sm:mx-6')
      .bg-white.w-full.p-8.text-xl.text-gray-800.leading-normal(class='md:p-24 md:text-2xl' style='font-family:Georgia,serif;')
        template(v-for="textElement in blogEntryTextElements")
          component(:is="decideWhichTextElementToRender(textElement)" :textElement="textElement")
</template>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { BlogEntryComputedMixin } from '@/mixins'
import BlogPostHeader from '@/components/blog-post/Header.vue'
import ParagraphElement from '@/components/blog-post/ParagraphElement.vue'
import HeadingElement from '@/components/blog-post/HeadingElement.vue'
import ImageElement from '@/components/blog-post/ImageElement.vue'

export default defineComponent({
  mixins: [BlogEntryComputedMixin],
  components: { BlogPostHeader, ImageElement, HeadingElement, ParagraphElement },
  setup() {
    const route = useRoute()
    const store = blogStore()
    return { route, store }
  },
  computed: {
    idFromRoute() {
      return this.route.params.id
    },
    blogEntry() {
      const blogEntryFromId = this.store.getBlogEntries.find(entry => entry.sys.id === this.idFromRoute)
      return blogEntryFromId
    }
  },
  methods: {
    decideWhichTextElementToRender(textElement: String): String {
      const elementType = textElement.nodeType
      switch (elementType) {
        case 'paragraph':
          return 'ParagraphElement'
        case 'heading-1':
          return 'HeadingElement'
        case 'embedded-asset-block':
          return 'ImageElement'
      }
    }
  }
})
</script>

