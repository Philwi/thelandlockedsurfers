export type BlogEntry = {
  fields: Field
  metadata: MetaData
  sys: Sys
}

type Field = {
  author: Author
  createdAt: string
  headline: string
  previewImage: PreviewImage
  readingTime: number
  text: Text
}

type Author = {
  fields: AuthorField
  metadata: MetaData
  sys: Sys
}

type PreviewImage = {
  fields: ImageField[]
  metaData: MetaData
  sys: Sys
}

type Text = {
  content: Content[]
  data: {}
  nodeType: string
}

type Content = {
  content: TextContent[]
  data: {}
  nodeType: string
}

type TextContent = {
  data: {}
  marks: string[]
  nodeType: string
  value: string
}

export type MetaData = {
  tags: Tags[]
}

export type Sys = {
  contentType: { sys: ElementSys }
  createdAt: string
  environment: Environment
  id: string
  locale: string
  revision: number
  space: { sys: ElementSys }
  type: string
  updatedAt: string
}

type Environment = {
  sys: ElementSys
}

type Tags = {
  sys: ElementSys
}

type ElementSys = {
  id: string
  linkType: string
  type: string
}

export type AuthorField = {
  age: string
  avatar: AuthorAvatar
  name: string
}

type AuthorAvatar = {
  fields: ImageField
  metadata: MetaData
  sys: Sys
}

export type ImageField = {
  description: string
  file: ImageFile
  title: string
}

type ImageFile = {
  contentType: string
  details: ImageFileDetails
  fileName: string
  url: string
}

type ImageFileDetails = {
  image: ImageFileDetailsImage
  size: number
}

type ImageFileDetailsImage = {
  height: number
  width: number
}
