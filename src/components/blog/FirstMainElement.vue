<template lang="pug">
.bg-gray-200.w-full.text-xl.text-gray-800.leading-normal.rounded-t(class='md:text-2xl')
  .flex.h-full.bg-white.rounded.overflow-hidden.shadow-lg
    RouterLink.flex.flex-wrap.no-underline(:to='blogPath' class='hover:no-underline')
      .w-full.rounded-t(class='md:w-2/3')
        VLazyImage.h-full.w-full.shadow.object-cover(:src='previewImageUrl')
      .w-full.flex.flex-col.flex-grow.flex-shrink(class='md:w-1/3')
        .flex-1.bg-white.rounded-t.rounded-b-none.overflow-hidden.shadow-lg
          p.w-full.text-gray-600.text-xs.pt-6.px-6(class='md:text-sm') GRÜßT EUCH
          .w-full.font-bold.text-xl.text-gray-900.px-6.font-pt-serif {{ headline }}
          p.text-gray-800.font-serif.text-base.px-6.mb-5
            | {{ firstParagraph }}

        .flex-none.mt-auto.bg-white.rounded-b.rounded-t-none.overflow-hidden.shadow-lg.p-6

          .flex.items-center.justify-between
            img.w-8.h-8.rounded-full.mr-4.avatar(:data-tippy-content='authorName' :src='authorImageUrl' alt='Avatar of Author')
            .space-y-2
              template(v-for="tag in tags")
                Tag(:tag="tag")
            p.text-gray-600.text-xs(class='md:text-sm') {{ readingTime }} Minuten Lesedauer

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { BlogEntryPropMixin } from '@/mixins'
import { BlogEntryComputedMixin } from '@/mixins'
import VLazyImage from "v-lazy-image"


export default defineComponent({
  mixins: [BlogEntryComputedMixin, BlogEntryPropMixin],
  components: { VLazyImage }
})
</script>

