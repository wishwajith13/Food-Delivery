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
  it('test sign in button',()=>{
    cy.getDataTest('click-signIn-button').click() 
    cy.contains(/Log In/i).should('be.visible') 

    //Enter data in happy mood
    cy.getDataTest('email').type('wishwams13@gmail.com')
    cy.getDataTest('password').type('wfdjsjskc23$%')
    cy.getDataTest('checkbox').click()
    // cy.getDataTest('click-logIn-button').click({ force: true })
    cy.getDataTest('click-hear').click()
    cy.getDataTest('text').type('wishwajith Samaranayaka')
    cy.getDataTest('click-cross').click()
  })
})
