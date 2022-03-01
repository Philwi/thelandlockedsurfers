import Tag from '@/components/tags/Tag.vue'

export let BlogEntryPropMixin = {
  computed: { Tag },
  props: {
    blogEntry: {
      required: true,
      type: Object,
      fields: {
        type: Object,
        author: {
          type: Object,
          fields: {
            type: Object,
            age: {
              type: String
            },
            name: {
              type: String
            },
            avatar: {
              type: Object,
              fields: {
                type: Object,
                title: {
                  type: String
                },
                file: {
                  type: Object,
                  url: {
                    type: String
                  }
                }
              }
            }
          }
        },
        createdAt: {
          type: String
        },
        headline: {
          type: String
        },
        locationCreate: {
          type: Object,
          lat: {
            type: Number
          },
          lon: {
            type: Number
          }
        },
        previewImage: {
          type: Object,
          fields: {
            type: Object,
            title: {
              type: String
            },
            file: {
              type: Object,
              url: {
                type: String
              }
            }
          }
        },
        text: {
          type: Object,
          content: {
            type: Array
          }
        },
        readingTime: {
          type: String
        }
      },
      metadata: {
        type: Object,
        tags: {
          type: Array
        }
      },
      sys: {
        type: Object,
        id: {
          type: String
        }
      }
    }
  },
  components: {
    Tag
  },
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
    }
  }
}
