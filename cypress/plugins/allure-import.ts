const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export function setupNodeEvents(on: any, config: any) {
    allureWriter(on, config);
    return config;
}