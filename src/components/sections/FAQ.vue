<template lang="pug">
section.sectionSize.items-start.pt-8.bg-black.text-white(class='md:pt-36')
  div
    h2.secondaryTitle.bg-highlight3.p-10.mb-0.bg-center(class='bg-100%')
      | FAQ
  .w-full.py-4(toggleelement='')
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto(question='')
        | Where can I get this HTML template?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(answer='')
      | You can download it on Gumroad.com
  hr.w-full.bg-white
  .w-full.py-4(toggleelement='')
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto(question='')
        | Is this HTML template free?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(answer='')
      | Yes! For you it is free.
  hr.w-full.bg-white
  .w-full.py-4(toggleelement='')
    .flex.justify-between.items-center
      .font-montserrat.font-medium.mr-auto(question='')
        | Am I awesome?
      img.transform.transition-transform(src='../../assets/logos/CaretRight.svg' alt='')
    .font-montserrat.text-sm.font-extralight.pb-8.hidden(answer='')
      | Yes! No doubt about it.
  hr.w-full.bg-white
</template>
