describe('Home Page Test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('header animate', () => {
    // cy.contains(/Order Your Food Here/i).should('not.be.visible')
    cy.wait(2000)
    cy.contains(/Order Your Food Here/i).should('be.visible')
  })
  
})