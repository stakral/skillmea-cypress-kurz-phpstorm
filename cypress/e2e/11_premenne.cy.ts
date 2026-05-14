beforeEach(() => {

  // arrange
  cy.visit('/')

  cy.get('[data-testid=board-item]')
    .invoke('text')
    .as('boardName')

})

it('premenné', function () {

  // act
  cy.get('[data-testid=board-item]')
    .click()

  // assert
  cy.get('[data-testid="board-title"]')
    .should('have.value', this.boardName)

})