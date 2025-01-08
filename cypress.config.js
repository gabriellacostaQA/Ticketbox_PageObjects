const { defineConfig } = require("cypress");
const mochawesome = require("mochawesome");

module.exports = defineConfig({
  projectId: "q6wu8b", // ID do Cypress Cloud
  e2e: {
    setupNodeEvents(on, config) {
      // Configuração do Mochawesome para geração de relatórios
      on("after:run", (results) => {
        const fs = require("fs");
        const mochawesomeOptions = {
          reportDir: "cypress/reports", // Diretório onde os relatórios serão gerados
          overwrite: false,
          html: true,
          json: true,
        };
        mochawesome.generate(results, mochawesomeOptions);
      });

      // Implementação de outros node event listeners, se necessário
      return config;
    },
    
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}", // Padrão dos arquivos de testes
  },
  reporter: "mochawesome", // Define o Mochawesome como o reporter
  reporterOptions: {
    reportDir: "cypress/reports", // Diretório onde os relatórios serão armazenados
    overwrite: false,
    html: true,
    json: true,
  },
});

