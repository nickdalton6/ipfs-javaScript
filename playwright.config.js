
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
  
    timeout: 5000
  },
  
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName:'chromium',
    headless:false,
    screenshot:'only-on-failure',
    trace:'only-on-failure',
    video:'retain-on-failure',
    ignoreHTTPSErrors: true,
  },
};

module.exports = config;
