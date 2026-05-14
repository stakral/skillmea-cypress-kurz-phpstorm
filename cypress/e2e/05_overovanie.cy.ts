it('overovanie', () => {

  // Pre správne fungovanie testu je potrebné mať vytvorený board v ňom list a v liste card.
  // Taktiež musia sedieť názvy listov a kariet a stav checkboxov.

  cy.visit('/board/1')

  // overenie viditeľnosti
  cy.get('[data-testid=card]')
      .should('be.visible')

  // overenie počtu kariet
  cy.get('[data-testid=card]')
      .should('have.length', 3)

  cy.get('[data-testid=card-checkbox]')
      .eq(0)
      .check()

  // overenie nezaškrtnutia checkboxu
  cy.get('[data-testid=card-checkbox]')
      .eq(1)
      .should('not.be.checked')

  // overenie zaškrtnutia checkboxu
  cy.get('[data-testid=card-checkbox]')
      .eq(0)
      .should('be.checked')

  // overenie pridania classu
  cy.get('[data-testid=due-date]')
      .should('have.class', 'completed')

  // overenie hodnoty v input elemente
  cy.get('[data-testid=list-name]')
      .should('have.value', 'new-list')

})