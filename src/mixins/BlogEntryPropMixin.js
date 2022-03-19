export let BlogEntryPropMixin = {
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
  }
}
