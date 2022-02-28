describe('Landing Page Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tests that there is the hero stage', () => {
    cy.get('h1').first().contains('The Landlocked Surfers').should('be.visible')
  })
})
