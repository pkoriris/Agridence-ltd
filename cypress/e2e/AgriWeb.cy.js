// cypress/integration/userAccount.spec.js

describe('User Account Test Cases', () => {

    it('TC001: Successful Login with Valid Credentials', () => {
      cy.visit('https://demo.nopcommerce.com/login', {failOnStatusCode: false});
        // Enter valid credentials
        cy.get('#Email').type('tot111@test.com'); 
        cy.get('#Password').type('Iamgood');
        cy.get('button.login-button').click();
  
    });
        
    it('TC002: Attempt to Access User Account Without Logging In', () => {
        // Navigate directly to "My Account"
        cy.visit('https://demo.nopcommerce.com/customer/info');
  
        // Verify the user is redirected to login page
        cy.url().should('include', '/login?ReturnUrl=%2Fcustomer%2Finfo');
       
    });
  
    it('TC003: Login with Empty Fields', () => {
  
         cy.visit('https://demo.nopcommerce.com/login', {failOnStatusCode: false});
         
        // Leave email and password empty
         cy.get('#Email').clear();
         cy.get('#Password').clear();
         
           //submit an empty form 
        cy.get('button.login-button').click();

         // Check for validation messages
        cy.get('.field-validation-error').should('be.visible').and('contain', 'Please enter your email') 
         
          });
  });
  