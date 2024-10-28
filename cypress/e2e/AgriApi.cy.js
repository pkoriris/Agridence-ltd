// <reference types="cypress" />

const baseUrl = 'https://agdemo-fiic3m7nzq-as.a.run.app';

describe('API Automation', () => {

    it('GET /ping', () => {
        cy.request(baseUrl + '/ping').then((response) => {
            timeout: 60000
             // Verify response headers
            expect(response.headers).to.have.property('content-type').and.includes('application/json');
            
            // Verify response data
            expect(response.body).to.have.property('message', 'pong');
            expect(response.body.time).to.be.a('number');
            expect(response.body).to.have.property('version', 'v1.0.0');
            expect(response.status).to.equal(200); // Validate status code
      
            expect(response.duration).to.be.lessThan(10000);
        });
    });
    it('GET /slow', () => {
        cy.request(baseUrl + '/slow').then((response) => {

            timeout: 60000 // Set to 60 seconds
            // Verify response headers
            expect(response.headers).to.have.property('content-type').and.includes('application/json');
            
            // Verify response data
            expect(response.body).to.have.property( "code","OK");
            expect(response.status).to.equal(200); // Validate status code
            cy.screenshot({ timeout: 100000 });
        
            expect(response.duration).to.be.lessThan(10000);
                });
    });

    it('GET /error', () => {
        cy.request(baseUrl + '/error').then((response) => {
            timeout: 60000
            
            // Verify response headers
            expect(response.headers).to.have.property('content-type').and.includes('application/json');
            
            // Verify response data
            expect(response.body).to.have.property( "code","OK");
            expect(response.status).to.equal(200); // Validate status code

            expect(response.duration).to.be.lessThan(10000);
        });
    });

});
