describe('Blog Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tests blog contains structure and visit first post', () => {
    cy.title().should('eq', 'The Landlocked Surfers')

    cy.get('a')
      .contains('Blog')
      .click()

    cy.get('p').contains('The Landlocked Surfers')
    cy.get('p').contains('Willkommen auf unserem Blog')
    cy.title().should('eq', 'The Landlocked Surfers - Blog Übersicht')
  })
})
