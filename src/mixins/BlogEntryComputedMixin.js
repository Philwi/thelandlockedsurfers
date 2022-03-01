export let BlogEntryComputedMixin = {
  computed: {
    authorImageUrl() {
      return this.blogEntry.fields.author.fields.avatar.fields.file.url
    },
    authorName() {
      return this.blogEntry.fields.author.fields.name
    },
    blogId() {
      return this.blogEntry.sys.id
    },
    blogPath() {
      // TODO: noch richtig aus dem Router holen
      return `/blog/${this.blogId}`
    },
    createdAt() {
      return new Date(this.blogEntry.fields.createdAt).toLocaleString('de-DE')
    },
    previewImageUrl() {
      return this.blogEntry.fields.previewImage.fields.file.url
    },
    tags() {
      return this.blogEntry.metadata.tags
    },
    headline() {
      return this.blogEntry.fields.headline
    },
    readingTime() {
      return this.blogEntry.fields.readingTime
    },
    firstParagraph() {
      const paragraphs = this.blogEntry.fields.text.content.filter(element => element.nodeType === 'paragraph')
      const text = paragraphs.map(paragraph => paragraph?.content[0]?.value)
      return text.join().substring(0, 250) + '...'
    },
    blogEntryTextElements() {
      return this.blogEntry.fields.text.content
    }
  }
}
