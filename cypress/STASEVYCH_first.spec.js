const {faker} = require ('@faker-js/faker')
const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomAddress = faker.address.secondaryAddress();
describe('Fill in fields with data', () => {
  before(() => {
    cy.visit('https://demoqa.com/text-box');
  });
  it('Full Name field', () => {
    cy.wait(2000)
    cy.get('#userName').type(randomName).should('have.value', randomName);
  });
  it('Email field', () => {
    cy.wait(2000)
    cy.get('#userEmail').type(randomEmail).should('have.value', randomEmail);
  });
  it('Current Address', () => {
    cy.wait(2000)
    cy.get('#currentAddress').type(randomAddress).should('have.value',randomAddress);
  });
  it('Permanent Address', () => {
    cy.wait(2000)
    cy.get('#permanentAddress').type(randomAddress).should('have.value', randomAddress);
  });
  it('Click Submit button', () => {
    cy.wait(2000)
    cy.get('#submit').click();
  });
});
