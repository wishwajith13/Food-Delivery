describe('Home Page Test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('header animate', () => {
    // cy.contains(/Order Your Food Here/i).should('not.be.visible')
    cy.wait(2000)
    cy.contains(/Order Your Food Here/i).should('be.visible')
  })
  it('select category',()=>{
    cy.getDataTest('Salad').click().click()
    cy.getDataTest('Rolls').click().click()
    cy.getDataTest('Deserts').click().click()
    cy.getDataTest('Sandwich').click().click()
    cy.getDataTest('Cake').click().click()
    cy.getDataTest('Pure Veg').click().click()
    cy.getDataTest('Pasta').click().click()
    cy.getDataTest('Noodles').click().click()
  })
  it('remove and add cart check',()=>{
    cy.getDataTest('cart-check').click({ multiple: true })
  })
})
