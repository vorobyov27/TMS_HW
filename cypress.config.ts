import { defineConfig } from "cypress";
import { setupNodeEvents } from "./cypress/plugins/allure-import";

export default defineConfig({
  e2e: {
    setupNodeEvents,
    screenshotsFolder: './cypress/screenshots',
    videosFolder: './cypress/videos',
    viewportHeight: 720,
    viewportWidth: 1280
  },
  env: {
    allure: true,
    allureResultsPath: './cypress/allure-results'
  }
});
