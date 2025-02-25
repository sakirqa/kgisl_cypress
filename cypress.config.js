const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 2560,
  viewportHeight: 1440,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
