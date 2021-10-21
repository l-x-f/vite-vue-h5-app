export {}

describe('visit', () => {
  it('changes the URL when "awesome" is clicked', () => {
    cy.visit('/login') // Nothing happens yet

    cy.get('.awesome-selector') // Still nothing happening
      .click() // Nope, nothing

    cy.url() // Nothing to see, yet
      .should('include', '/my/resource/path#awesomeness') // Nada.
  })

  // Ok, the test function has finished executing...
  // We've queued all of these commands and now
  // Cypress will begin running them in order!
})
