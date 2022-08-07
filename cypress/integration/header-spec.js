describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tests header contains links', () => {
    cy.get('a')
      .contains('Home')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "/")

    cy.get('a')
      .contains('Blog')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "/blog")

    cy.get('a')
      .contains('Shop')
      .should("have.attr", "href")
      .should("not.be.empty")
      .and("contain", "https://saltypotato1.myspreadshop.de");
  })
})
