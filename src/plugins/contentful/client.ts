import { createClient } from 'contentful'

const contentfulClient = createClient({
  accessToken: 'jEqzUW3jKC0Km0PvuH36pjaWLOCNnLKEnIZWobshKLw',
  space: '5es1u04si2z3'
})

const PRODUCT_CONTENT_TYPE_ID = 'blogPost'

export const initContentfulEntries = () => {
  contentfulClient.getEntries({
      content_type: PRODUCT_CONTENT_TYPE_ID
    })
    .then(function(entries) {
      console.log(entries)
    })
}
