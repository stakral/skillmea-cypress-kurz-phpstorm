// Prihlásenie pomocou UI.
beforeEach(() => {
  cy.session(
      'login',
      () => {
        cy.visit('/login')

        cy.get('[data-testid="login-email"]')
          .type('kingus@gmail.com')

        cy.get('[data-testid="login-password"]')
          .type('halamaga{enter}')

        cy.location('pathname')
          .should('eq', '/')
      })
});

// Prihlásenie pomocou API.
// beforeEach(() => {
//
//   cy.request({
//     method: 'POST',
//     url: '/api/login',
//     body: {
//       email: 'kingus@gmail.com',
//       password: 'halamaga'
//     }
//   }).then((res) => {
//     cy.setCookie('auth_token', res.body.accessToken)
//
//   })
// });

it('prihlasenie', () => {

  cy.visit('/')

  cy.get('[data-testid=board-item]')
    .should('have.length', 1)

});