const { faker } = require ('@faker-js/faker');
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomAddress = faker.address.secondaryAddress();

describe('Fill in the fields with data', () => {
  before(() => {

    cy.visit('https://demoqa.com/text-box');
  });
  afterEach(() => {
    cy.reload(); 
  });
  it('Fill in data ', () => {
    cy.wait(2000)
    cy.get('#userForm #userName').type(randomName).should('have.value', randomName);
    cy.get('#userForm #userEmail').type(randomEmail).should('have.value', randomEmail);
    cy.get('#userForm #currentAddress').type(randomAddress).should('have.value', randomAddress);
    cy.get('#userForm #permanentAddress').type(randomAddress).should('have.value', randomAddress);
  });
  it('Submit button have to be visible', () => {
    cy.wait(2000)
    cy.get('#userForm #submit').should('be.visible');
  });
  it('Check submit result', () => {
    cy.wait(2000)
    cy.get('#userForm #userName').type(randomName);
    cy.get('#userForm #userEmail').type(randomEmail);
    cy.get('#userForm #currentAddress').type(randomAddress);
    cy.get('#userForm #permanentAddress').type(randomAddress);
    cy.get('#userForm #submit').click();
    cy.get('#output #name').contains(randomName);
    cy.get('#output #email').contains(randomEmail);
    cy.get('#output #currentAddress').contains(randomAddress);
    cy.get('#output #permanentAddress').contains(randomAddress);
  });

})