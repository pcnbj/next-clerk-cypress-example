import { defineConfig } from "cypress";
require("dotenv").config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalSessionAndOrigin: true,
  },
  env: {
    TEST_USER_EMAIL:
      process.env.TEST_USER_EMAIL !== undefined
        ? process.env.TEST_USER_EMAIL
        : "testuser+clerk_test@test.com",
    TEST_USER_PASSWORD:
      process.env.TEST_USER_PASSWORD !== undefined
        ? process.env.TEST_USER_PASSWORD
        : "xfg1cjk9CWR4jqd_tvr",
    INIT_URL: "localhost:3000/init",
  },
});
