// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });
// module.exports = (on, config) => {
//   console.log('Your Cypress config is', config);

//   config.env.NODE_ENV = 'development';

//   return config;
// };

const { defineConfig } = require('cypress');

module.exports = defineConfig({
    defaultCommandTimeout: 20000, // 10 seconds
    pageLoadTimeout: 120000,       // 120 seconds
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    
  },
  
});
