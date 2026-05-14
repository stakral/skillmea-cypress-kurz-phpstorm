before(() => {


})

describe('group #1', () => {

  beforeEach(() => {
    cy.log(Cypress.currentTest.title)
  });

  it('otvorenie aplikácie', () => {



  });

  it('overenie loga', () => {

    cy.get('[data-testid=trello-logo]')
      .should('be.visible')

  })

});

describe('group #2', () => {

  it('otvorenie boardu', () => {

    cy.visit('/board/1')

  })

});

