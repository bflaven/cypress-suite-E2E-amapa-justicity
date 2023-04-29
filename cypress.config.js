const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

 on('task', {
      logInfo({ message }) {
      console.log('%s', message)
      return null
    },
      welcomeMessage({ greeting, name }) {
          console.log('%s, %s', greeting, name)
          return null
        }
  });


  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


module.exports = defineConfig({

  e2e: {
    setupNodeEvents,

    // baseUrl: 'http://dev.lamapa.org/',
    baseUrl: 'https://dev.app.justicity.com', 
    supportFile: 'cypress/support/e2e.js',
    // baseUrl: 'https://app.justicity.com', 
    screenshotsFolder :'po_screenshots',
    specPattern: ['cypress/e2e/features/*.feature','cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    // projectId: 'f6y94u', // for cypress cloud
    parallel: true,
    video: true,
    videoCompression: 16,
    videoUploadOnPasses: true,
    // retries: {
      // runMode: 2,
      // runMode: 1,
      // openMode: 1
    // },
    waitForAnimations : true,
    experimentalFetchPolyfill : true,
    experimentalInteractiveRunEvents : true,
    experimentalSourceRewriting : false,
    animationDistanceThreshold : 50,
    viewportWidth : 1280,
    viewportHeight : 1024,
    defaultCommandTimeout : 5000,
    slowTestThreshold : 2500,
    chromeWebSecurity: false,
    // https://docs.cypress.io/guides/references/experiments
    experimentalMemoryManagement : true,
    numTestsKeptInMemory : 1,
    env: {
      DEVICE_TYPE:'desktop', // mobile, tablet, desktop. By default this is desktop
      APP_MAIN_DOMAIN:'dev.app.justicity.com',
      allureReuseAfterSpec: true,
    },

  },
});
