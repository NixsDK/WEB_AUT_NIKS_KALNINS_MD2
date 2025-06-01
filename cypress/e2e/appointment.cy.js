Cypress.on("uncaught:exception", () => false);

describe('MD#2 - CURA Healthcare App', () => {

  // Scenario 1 - Book Appointment
  it('Scenario 1 - Make an Appointment', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    cy.contains('Make Appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    cy.get('#combo_facility').select('Seoul CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_visit_date').click();
    cy.get('.datepicker-days td').contains('30').click();
    cy.get('#txt_comment').type('CURA Healthcare Service');
    cy.get('#btn-book-appointment').click();

    cy.get('#facility').should('contain', 'Seoul CURA Healthcare Center');
    cy.get('#hospital_readmission').should('contain', 'Yes');
    cy.get('#program').should('contain', 'Medicaid');
    cy.get('#visit_date').should('contain', '30');
    cy.get('#comment').should('contain', 'CURA Healthcare Service');
  });

  // Scenario 2 - History Page Validation
  it('Scenario 2 - Appointment History is Empty', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');

    cy.contains('Make Appointment').click();
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();

    cy.get('#menu-toggle').click();
    cy.contains('History').click();

    cy.get('body').should('contain.text', 'No appointment');
  });

});
