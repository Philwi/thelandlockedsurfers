<template lang="pug">
.py-12.flex.flex-col.justify-center.items-center
  .flex-col.py-2
    template(v-for="tag in selectedTags")
      button.px-2(v-on:click="removeTag(tag)")
        StyledTag.relative.z-10(:tagName="tag")
          CloseCircle.inline.mr-2

  .flex-col
    .flex.items-center.justify-center.w-screen.h-8
      .relative.text-gray-600.bg-gray-100.rounded-lg.shadow-lg(class='focus-within:text-gray-400')
        span.absolute.inset-y-0.left-0.flex.items-center.pl-2
          button.p-1(type='submit' class='focus:outline-none focus:shadow-outline')
            svg.w-6.h-6(
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              viewbox='0 0 24 24'
            )
              path(d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z')
        input.py-2.text-sm.text-gray-900.bg-white.rounded-md.pl-10(
          type='search'
          name='q'
          class='focus:outline-none '
          placeholder='Suche'
          autocomplete='off'
          v-model="title"
        )
  .flex-col.py-2
    template(v-for="tag in unselectedTags")
      button.px-2(v-on:click="addTag(tag)")
        StyledTag.relative.z-10(:tagName="tag")
          PlusCircle.inline.mr-2
  p.text-gray-300.font-serif.text-base.pt-6
    | {{ blogEntriesFoundSentence }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { blogStore, filterBlogEntriesByTagAndTitle } from '@/plugins/store'
import { CloseCircle, PlusCircle } from 'mdue'
import StyledTag from '@/components/blog-tags/StyledTag.vue'

export default defineComponent({
  components: { StyledTag, CloseCircle, PlusCircle },
  setup() {
    const store = blogStore()

    return { store }
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    blogEntries() {
      return this.store.getBlogEntries
    },
    filteredBlogEntires() {
      return this.store.filteredBlogEntries
    },
    blogEntriesFoundSentence() {
      return `${this.filteredBlogEntires.length} von ${this.blogEntries.length} Blog-Einträgen gefunden`
    },
    allPossibleTags() {
      return this.store.allTags
    },
    unselectedTags() {
      return this.allPossibleTags.filter(tag => !this.tags.includes(tag))
    },
    selectedTags() {
      return this.allPossibleTags.filter(tag => !this.unselectedTags.includes(tag))
    },
    tags() {
      return this.store.searchTags
    }
  },
  watch: {
    title(newTitle) {
      this.store.setSearchTitle(newTitle)
    }
  },
  methods: {
    addTag(tag) {
      this.store.addSearchTag(tag)
    },
    removeTag(tag) {
      this.store.removeSearchTag(tag)
    }
  }
})
</script>
