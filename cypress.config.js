const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {

      // registra plugin Cucumber
      await addCucumberPreprocessorPlugin(on, config);

      // registra ESBuild Preprocessor
      on(
        "file:preprocessor",
        createBundler()
      );

      return config;
    },

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://blog.agibank.com.br"
  },
});
