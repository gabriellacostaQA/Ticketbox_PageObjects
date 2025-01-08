const { defineConfig } = require("cypress");
const mochawesome = require("mochawesome");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Relatório Mochawesome
      on('after:run', (results) => {
        mochawesome.create(results);
      });

      // Configuração do Cypress Cloud (projectId)
      config.projectId = "q6wu8b";

      return config;
    },
    reporter: "mochawesome", // Usa o Mochawesome como reporter
    reporterOptions: {
      reportDir: "cypress/reports", // Diretorio onde o relatório será salvo
      overwrite: true,
      html: true,
      json: true
    },
  },
});
