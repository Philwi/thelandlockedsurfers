<template lang="pug">
.font-sans.leading-normal.tracking-normal
  BlogTopElement
  .container.px-4.max-w-6xl.mx-auto(class='-mt-32 md:px-0')
    .mx-0(class='sm:mx-6')
      template(v-if="store?.getBlogEntries?.length > 0")
        FirstMainElement(:blogEntry="store.filteredBlogEntries[0]")
        template(v-if="store.filteredBlogEntries.length === 0")
          FirstMainElement(:blogEntry="defaultBlogEntry")
        SearchElement
        .flex.flex-wrap.justify-between.pt-12.-mx-6
          // render first 1-3
          ThreeElements(:blogEntries="elementsForThreeElements")
          // render 4-5
          TwoElements(:blogEntries="elementsForTwoElements")
          // render 6-7
          RightMoreSpaceThanLeft(:blogEntries="elementsForRightMoreSpaceThanLeft")
          // render the rest
          template(v-for="blogEntry in restElements")
            CardForIndex(:blogEntry="blogEntry")
</template>

<script lang="ts">
import { blogStore } from '@/plugins/store'
import { defineComponent } from 'vue'
import Waschbaer from '@/assets/waschbaer.png'
import BlogTopElement from '@/components/blog/BlogTopElement.vue'
import CardForIndex from '@/components/blog/CardForIndex.vue'
import FirstMainElement from '@/components/blog/FirstMainElement.vue'
import RightMoreSpaceThanLeft from '@/components/blog/RightMoreSpaceThanLeft.vue'
import SearchElement from '@/components/blog/SearchElement.vue'
import ThreeElements from '@/components/blog/ThreeElements.vue'
import TwoElements from '@/components/blog/TwoElements.vue'

export default defineComponent({
  name: 'BlogIndexPage',
  components: {
    BlogTopElement, CardForIndex, FirstMainElement, ThreeElements, TwoElements, RightMoreSpaceThanLeft, SearchElement, Waschbaer
  },
  setup() {
    const store = blogStore()

    return { store }
  },
  computed: {
    defaultBlogEntry() {
      return {
        fields: {
          author: {
            fields: {
              avatar: {
                fields: {
                  name: 'Philena',
                  file: {
                    url: Waschbaer
                  }
                }
              }
            }
          },
          headline: 'Leider keinen Blog-Eintrag gefunden',
          text: {
            content: [
              {
                content: [{
                  value: 'Du musst vielleicht einfach einen anderen Suchbegriff oder ein anderes Tag probieren.'
                }],
                nodeType: 'paragraph',
              }
            ]
          },
          previewImage: {
            fields: {
              file: {
                url: Waschbaer
              }
            }
          },
          createdAt: '2019-01-01T00:00:00.000Z',
          readingTime: '1'
        },
        sys: {
          id: 'no-blog-entry-found'
        }
      }
    },
    elementsForThreeElements() {
      return this.store.filteredBlogEntries.slice(1, 4)
    },
    elementsForTwoElements() {
      return this.store.filteredBlogEntries.slice(4, 6)
    },
    elementsForRightMoreSpaceThanLeft() {
      return this.store.filteredBlogEntries.slice(6, 8)
    },
    restElements() {
      const lengthBlogEntries = this.store.filteredBlogEntries.length
      return this.store.filteredBlogEntries.slice(8, lengthBlogEntries - 1)
    }
  },
  created() {
    this.clearSearchBlogTitleAndTags()
  },
  methods: {
    clearSearchBlogTitleAndTags() {
      this.store.removeAllSearchTags()
      this.store.removeSearchTitle()
    }
  }
})
</script>

