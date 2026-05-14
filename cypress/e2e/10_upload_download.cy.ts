it("upload a download", () => {
  cy.visit("/board/1?card=1");

  // Pozor, pri opätovnom uploade je potrebné najprv uploadnutý image vymazať)

// Použitie skrytého file inputu
// cy.get('[type=file]')
//   .invoke('show') // Odstránenie classu "hidden" t.j. display: none
//   .selectFile('cypress/fixtures/skillmea_logo.svg', { action: 'drag-drop' })

// Použitie drop zony
//   cy.get('[data-testid="upload-image"]')
//       .selectFile('cypress/fixtures/skillmea_logo.svg', {action: 'drag-drop'})

  // Download
  cy.contains("Download").click();
  // Overenie či súbor bol stiahnutý
  cy.readFile("cypress/downloads/1_skillmea_logo.svg");

  // Overenie stiahnutého súboru s nesprávnym názvom (fail)
  // cy.readFile("cypress/downloads/skillmea_logo.svg");

});