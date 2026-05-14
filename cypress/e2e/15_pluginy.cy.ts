it('pluginy', () => {

  // Using API plugin

  cy.api('POST', '/api/boards', {
    name: "Hello world"
  })

  // NOTE: to make this test pass, you need to create a board with id 1.
  cy.api('PATCH', '/api/boards/1', {
    starred: true
  })

  // NOTE: to make this test pass, you need to create a board with id 1.
  cy.api('DELETE', '/api/boards/1')


  // Using API plugin with enabled env: { requestMode: true } in cypress.config.ts.
  // This enables the use of cy.request() for API calls instead of cy.api().

  cy.request('POST', '/api/boards', {
    name: "Hello world"
  })

  // NOTE: to make this test pass, you need to create a board with id 2.
  cy.request('PATCH', '/api/boards/2', {
    starred: true
  })

  // NOTE: to make this test pass, you need to create a board with id 2.
  cy.request('DELETE', '/api/boards/2')

});