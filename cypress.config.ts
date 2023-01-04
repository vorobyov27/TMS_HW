import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: './cypress/screenshots',
    videosFolder: './cypress/videos',
    viewportHeight: 720,
    viewportWidth: 1280
  },
});
