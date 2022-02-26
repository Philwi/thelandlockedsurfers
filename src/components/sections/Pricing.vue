<template lang="pug">
section.sectionSize.bg-secondary.py-0
  div
    h2.secondaryTitle.bg-underline4.mb-0(class='bg-100%') Pricing
  .flex.w-full.flex-col(class='md:flex-row')
    .flex-1.flex.flex-col.mx-6.shadow-2xl.relative.bg-secondary.rounded-2xl.py-5.px-8.my-8(class='md:top-24')
      h3.font-pt-serif.font-normal.text-2xl.mb-4
        | The Good
      .font-montserrat.font-bold.text-2xl.mb-4
        | $25
        span.font-normal.text-base  / month
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #1
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #2
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #3
      button.border-2.border-solid.border-black.rounded-xl.text-lg.py-3.mt-4
        | Choose plan
    .flex-1.flex.flex-col.mx-6.shadow-2xl.relative.bg-secondary.rounded-2xl.py-5.px-8.my-8(class='md:top-12')
      h3.font-pt-serif.font-normal.text-2xl.mb-4
        | The Bad
      .font-montserrat.font-bold.text-2xl.mb-4
        | $40
        span.font-normal.text-base  / month
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #1
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #2
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #3
      button.border-2.border-solid.border-black.rounded-xl.text-lg.py-3.mt-4
        | Choose plan
    .flex-1.flex.flex-col.mx-6.shadow-2xl.relative.bg-secondary.rounded-2xl.py-5.px-8.my-8(class='md:top-24')
      h3.font-pt-serif.font-normal.text-2xl.mb-4
        | The Ugly
      .font-montserrat.font-bold.text-2xl.mb-4
        | $50
        span.font-normal.text-base  / month
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #1
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #2
      .flex
        img.mr-1(src='../../assets/logos/CheckedBox.svg' alt='')
        p Benefit #3
      button.border-2.border-solid.border-black.rounded-xl.text-lg.py-3.mt-4
        | Choose plan
</template>
