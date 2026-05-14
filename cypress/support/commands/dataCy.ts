Cypress.Commands.add('dataCy', (selector) => {

  Cypress.log({
    displayName: 'dataCy', // Command name
    message: selector, // Command value
    // Sending the above props to the console
    // To display properties in the Comsole, select command in Cypress UI and use Opt+Comnd+J
    consoleProps() {
      return {
        selector
      }
    }
  })

  cy.get(`[data-testid="${selector}"]`, { log: false })
  // The "log: false" option prevents the command from logging to the terminal/Cypress UI.
})