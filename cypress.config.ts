const { defineConfig } = require("cypress");
// import { resetDb } from './cypress/tasks/resetDb'

module.exports = defineConfig({
  projectId: 'nvrnry',
  viewportHeight: 550,
  viewportWidth: 660,
  // video: true, // Video will be made in headless tests only.

  e2e: {
    // setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
    //
    //   /* lesson 18 - Task. */
    //   // on('task', {
    //   //   reset: resetDb
    //   // })
    //
    //   /* lesson 19 - Config. */
    //   // config.baseUrl = process.env.CI ? 'https://skillmea.sk' : 'http://localhost:3000'
    //   // return config
    // },
    specPattern: '**/headless/*.cy.{js,ts}',
    // excludeSpecPattern: '**/headless/*.cy.{js,ts}',

    baseUrl: 'http://localhost:3000',
    // experimentalWebKitSupport: true,

    allowCypressEnv: false,

    // env: {
    //   requestMode: true
    // }
  }
});
