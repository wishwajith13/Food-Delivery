describe('Home Page Test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('header animate', () => {
    cy.contains(/Order Your Food Here/i).should('not.be.visible')
    cy.wait(1000)
    cy.contains(/Order Your Food Here/i).should('be.visible')
  })
  // it.only('check mouse hover',()=>{
  //   cy.wait(3000)
  //   // cy.getDataTest('header-animate').within(()=>{
  //   //   cy.getDataTest('button-test').trigger('mouseover')
  //   // })
  //   cy.getDataTest('header-animate').trigger('mouseover')
  // })
})