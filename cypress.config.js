const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    screenshotOnRunFailure: true,
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
