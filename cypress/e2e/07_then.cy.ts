it('text prvej karty', () => {

  cy.visit('/board/1')

  cy.get('[data-testid="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

});

it('text všetkých kariet', () => {

  cy.visit('/board/1')

  cy.get('[data-testid="card-text"]')
    .eq(0)
    .should('have.text', 'milk')

  cy.get('[data-testid="card-text"]')
    .eq(0)
    .should('have.text', 'bread')

  cy.get('[data-testid="card-text"]')
    .eq(0)
    .should('have.text', 'juice')


});