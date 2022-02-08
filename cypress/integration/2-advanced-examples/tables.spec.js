const { faker } = require("@faker-js/faker");

const USER_FIRST_NAME = faker.name.firstName();
const USER_LAST_NAME = faker.name.lastName();
const USER_EMAIL = faker.internet.email();
const USER_AGE = faker.random.number(34, 55, 78);
const USER_SALARY = faker.random.number(56, 578, 8564);
const USER_DEPARTMENT = "department";
const SELECTORS = {
  addButton: "#addNewRecordButton",
  firstName: "#firstName",
  lastName: "#lastName",
  userEmail: "#userEmail",
  age: "#age",
  salary: "#salary",
  department: "#department",
  submit: "#submit",

};
const EDIT_USER_FIRST_NAME = faker.name.firstName();
const EDIT_USER_LAST_NAME = faker.name.lastName();
const EDIT_USER_EMAIL = faker.internet.email();
const EDIT_USER_AGE = faker.random.number(34, 56, 23);
const EDIT_USER_SALARY = faker.random.number(345, 654, 939);
const EDIT_USER_DEPARTMENT = "Account";

describe("Testing of Web Tables page", () => {
  before(() => {
    cy.visit("https://demoqa.com/webtables");
  });

  it(" Add a new user", () => {
    cy.get("#addNewRecordButton").click();
    cy.get(".modal-content").should("be.visible");

    cy.get("#firstName")
      .click()
      .type(USER_FIRST_NAME)
      .should("have.value", USER_FIRST_NAME);

    cy.get("#lastName")
      .click()
      .type(USER_LAST_NAME)
      .should("have.value", USER_LAST_NAME);

    cy.get("#userEmail")
      .click()
      .type(USER_EMAIL)
      .should("have.value", USER_EMAIL);

    cy.get("#age").click().type(USER_AGE).should("have.value", USER_AGE);

    cy.get("#salary")
      .click()
      .type(USER_SALARY)
      .should("have.value", USER_SALARY);

    cy.get("#department")
      .click()
      .type(USER_DEPARTMENT)
      .should("have.value", USER_DEPARTMENT);

    cy.get("#submit").click();

    cy.get(".rt-tbody")
      .should("include.text", USER_FIRST_NAME)
      .and("include.text", USER_LAST_NAME)
      .and("include.text", USER_EMAIL)
      .and("include.text", USER_AGE)
      .and("include.text", USER_SALARY)
      .and("include.text", USER_DEPARTMENT);
  });

  it("Edit User", () => {
    cy.get("#edit-record-4").click();
    cy.get(".modal-content").should("be.visible");

    cy.get("#firstName")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_FIRST_NAME)
      .should("have.value", EDIT_USER_FIRST_NAME);

    cy.get("#lastName")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_LAST_NAME)
      .should("have.value", EDIT_USER_LAST_NAME);

    cy.get("#userEmail")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_EMAIL)
      .should("have.value", EDIT_USER_EMAIL);

    cy.get("#age")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_AGE)
      .should("have.value", EDIT_USER_AGE);

    cy.get("#salary")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_SALARY)
      .should("have.value", EDIT_USER_SALARY);

    cy.get("#department")
      .click()
      .clear()
      .should("be.empty")
      .type(EDIT_USER_DEPARTMENT)
      .should("have.value", EDIT_USER_DEPARTMENT);

    cy.get("#submit").click();

    cy.get(".rt-tbody")
      .should("include.text", EDIT_USER_FIRST_NAME)
      .and("include.text", EDIT_USER_LAST_NAME)
      .and("include.text", EDIT_USER_EMAIL)
      .and("include.text", EDIT_USER_AGE)
      .and("include.text", EDIT_USER_SALARY)
      .and("include.text", EDIT_USER_DEPARTMENT);
  });

  it("Delete a user", () => {
    cy.get("#delete-record-1").click();
    cy.get(".rt-tbody").should("not.include.text", "Cierra");
  });

  it("Search User", () => {
    cy.get(SELECTORS.addButton).click();

    cy.get(SELECTORS.firstName).type(USER_FIRST_NAME);
    cy.get(SELECTORS.lastName).type(USER_LAST_NAME);
    cy.get(SELECTORS.userEmail).type(USER_EMAIL);
    cy.get(SELECTORS.age).type(USER_AGE);
    cy.get(SELECTORS.salary).type(USER_SALARY);
    cy.get(SELECTORS.department).type(USER_DEPARTMENT);
    cy.get(SELECTORS.submit).click();
    const UserRow = cy.get('.rt-tr-group:first-child');

    cy.get('#searchBox').type(USER_FIRST_NAME);
    UserRow.should("exist");
    cy.get('#searchBox').clear().type(USER_LAST_NAME);
    UserRow.should("exist");
    cy.get('#searchBox').clear().type(USER_EMAIL);
    UserRow.should("exist");
    cy.get('#searchBox').clear().type(USER_AGE);
    UserRow.should("exist");
    cy.get('#searchBox').clear().type(USER_SALARY);
    UserRow.should("exist");
    cy.get('#searchBox').clear().type(USER_DEPARTMENT);
    UserRow.should("exist");
  });
});

