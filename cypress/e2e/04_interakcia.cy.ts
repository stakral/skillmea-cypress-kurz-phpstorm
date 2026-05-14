 it('vytvorenie karty', () => {

  cy.visit('/')
   // Vynechávame vytvorenie prvého boardu.
   // cy.get('[data-testid="first-board"]')
   //     .type('new board{enter}')

   cy.get('[data-testid="create-board"]')
       .click() // Pre selektnutie správného elementu je potrebné kliknúť na jeho samotný okraj.
   cy.get('[data-testid="new-board-input"]')
       .click()
   cy.get('[data-testid="new-board-input"]')
       .type('new board{enter}')

   cy.get('[data-testid="add-list-input"]')
       .type('new list{enter}')
   cy.contains('Add list')
       .click()
   cy.get('[data-testid="new-card"]')
       .click()
   cy.get('[data-testid="new-card-input"]')
       .type('new card{enter}')
})

 it.only('bookmarknutie boardu', () => {
   cy.visit('/')
   cy.get('[data-testid="star"]')
       .eq(0) // Index boardu na bookmarknutie
       .click({ force: true }) // Povinne pre kliknutie na nezobrazený element.
 })