class TextElementor {
  constructor(text) {
    this.text = text
  }
}

export class ParagraphTextElementor extends TextElementor {
  constructor(text) {
    super(text)
    this.elementType = 'paragraph'
  }
}

export class SpecialFontTextElementor extends TextElementor {
  constructor(text, cssClass) {
    super(text)
    this.elementType = 'special'
    this.cssClass = cssClass
  }
}

export class HyperlinkTextElementor extends TextElementor {
  constructor(text, href) {
    super(text)
    this.elementType = 'hyperlink'
    this.href = href
  }
}
