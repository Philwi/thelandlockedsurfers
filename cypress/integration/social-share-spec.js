describe('Social Share Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Tests different share settings for different pages', () => {
    cy.get('svg.fixed').click()
    cy.contains('Teile diese Seite auf einer Social Media Plattform!')
    cy.get('a.share-network-telegram')
    cy.get('button').contains('Schließen').click()
  })
})
