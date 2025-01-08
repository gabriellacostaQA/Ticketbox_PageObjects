const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q6wu8b",
  e2e: {
    setupNodeEvents(on, config) {
      // Configurações de eventos (se necessário)
      return config;
    },
    //baseUrl: "http://localhost:3000",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
});


