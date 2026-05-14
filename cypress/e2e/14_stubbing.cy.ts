it('načítanie zoznamu boardov', () => {

  cy.intercept(
      {
        method: 'GET',
        url: '/api/boards'
      },
      { // Stubbing (Mocking) response - custom data pre test.
      // body: [{
      //   id: 1,
      //   name: 'Misia na Mars',
      //   starred: false
      // }],
    fixture: 'mockData.json'
  })
    .as('boardList')

  cy.visit('/');
})

it('chybová hláška pri vytvorení boardu', () => {

  cy.intercept({
    method: 'POST',
    url: '/api/boards'
  }, {
    statusCode: 403
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-testid=create-board]')
    .click()

  cy.get('[data-testid=new-board-input]')
    .type('garden project{enter}')

  cy.get('[data-testid="notification-message"]')
    .should('contain.text', 'There was an error creating board')

})

it.only('pomalé načítavanie', () => {

  cy.intercept(
      {
        method: 'GET',
        url: '/api/boards',
        times: 1 // Number of times the request should be made.
      },
      // Function to manipulate request (req) stated as the object above.
      (req) => {
          req.reply((res) => { // the 'res' param. means response.
          res.delay = 10000
      })
  })
    .as('boards')

  cy.visit('/')

  // Clicking on button displayed during the delay.
  cy.contains('Reload')
    .click()

  // Without the 'times: 1' in intercept(), this assertion would fail.
  cy.get('[data-testid=board-item]')
    .should('be.visible')

});