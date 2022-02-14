import * as data from "./constForE2E";
import "cypress-file-upload";

describe("Fill in the fields with data", () => {
  before(() => {
    cy.visit("https://demoqa.com/automation-practice-form");
  });

  it('submit form without filling the "last name" form, red highlighted field of last name should be display', () => {
    cy.reload();
    cy.get("#firstName")
      .type(data.USER_FIRST_NAME)
      .should("have.value", data.USER_FIRST_NAME);
    cy.get("#userNumber")
      .type(data.USER_NUMBER)
      .should("have.value", data.USER_NUMBER);
    cy.get("#gender-radio-2").click({ force: true });
    cy.get("#submit").click();
  });
  it("Should fill first name", () => {
    cy.reload();
    cy.get("#firstName")
      .type(data.USER_FIRST_NAME)
      .should("have.value", data.USER_FIRST_NAME);
  });
  it("Should fill Last name", () => {
    cy.get("#lastName")
      .type(data.USER_LAST_NAME)
      .should("have.value", data.USER_LAST_NAME);
  });
  it("Should choose gender", () => {
    cy.get("#gender-radio-3").click({ force: true });
  });
  it("Should fill phone number", () => {
    cy.get("#userNumber")
      .type(data.USER_NUMBER)
      .should("have.value", data.USER_NUMBER);
  });
  it("Should choose birth day", () => {
    cy.get(".react-datepicker__input-container").click();
    cy.get(".react-datepicker__month-select").select("June");
    cy.get(".react-datepicker__year-select").select("2005");
    cy.get(".react-datepicker__day.react-datepicker__day--031").click();
  });
  it("Should type some subject", () => {
    cy.get(".subjects-auto-complete__control").type("I wamt to be an AQA");
  });
  it("Should choose two hobbies", () => {
    cy.get("#hobbies-checkbox-2")
      .check({ force: true })
      .should("be.checked")
      .and("have.value", "2");
    cy.get("#hobbies-checkbox-3")
      .check({ force: true })
      .should("be.checked")
      .and("have.value", "3");
  });
  it("Should img be uploaded", () => {
    cy.get("input[type=file]").selectFile("cypress/fixtures/photo.png");
  });
  it("Should type the address", () => {
    cy.get("#currentAddress")
      .type(data.USER_ADDRESS)
      .should("have.value", data.USER_ADDRESS);
  });
  it("Should choose appropriate state", () => {
    cy.get(".css-2b097c-container").click({ multiple: true });
    cy.get("#react-select-3-input").type("Haryana{enter}");
  });
  it("Should choose appropriate city", () => {
    cy.get(".css-2b097c-container").click({ multiple: true });
    cy.get("#react-select-4-input").type("Karnal{enter}");
  });
  it("Click on the submit button, message that user is registered appears", () => {
    cy.get("#submit").click();
    cy.get(".table-responsive").should("be.visible");
  });
  describe("Fill in the fields another checkboxes, dropdowns and datepicker", () => {
    before(() => {
      cy.visit("https://demoqa.com/automation-practice-form");
    });
    it("Should fill first name", () => {
      cy.reload();
      cy.get("#firstName")
        .type(data.USER_FIRST_NAME)
        .should("have.value", data.USER_FIRST_NAME);
    });
    it("Should fill Last name", () => {
      cy.get("#lastName")
        .type(data.USER_LAST_NAME)
        .should("have.value", data.USER_LAST_NAME);
    });
    it("Should choose gender", () => {
      cy.get("#gender-radio-1").click({ force: true });
    });
    it("Should fill phone number", () => {
      cy.get("#userNumber")
        .type(data.USER_NUMBER)
        .should("have.value", data.USER_NUMBER);
    });
    it("Should choose birth day", () => {
      cy.get(".react-datepicker__input-container").click();
      cy.get(".react-datepicker__month-select").select("February");
      cy.get(".react-datepicker__year-select").select("2022");
      cy.get(".react-datepicker__day.react-datepicker__day--028").click();
    });
    it("Should type some subject", () => {
      cy.get(".subjects-auto-complete__control").type("AQA");
    });
    it("Should choose two hobbies", () => {
      cy.get("#hobbies-checkbox-1")
        .check({ force: true })
        .should("be.checked")
        .and("have.value", "1");
      cy.get("#hobbies-checkbox-3")
        .check({ force: true })
        .should("be.checked")
        .and("have.value", "3");
    });
    it("Should img be uploaded", () => {
      cy.get("input[type=file]").selectFile("cypress/fixtures/photoCat.png");
    });
    it("Should type the address", () => {
      cy.get("#currentAddress")
        .type(data.USER_ADDRESS)
        .should("have.value", data.USER_ADDRESS);
    });
    it("Should choose appropriate state", () => {
      cy.get(".css-2b097c-container").click({ multiple: true });
      cy.get("#react-select-3-input").type("Rajasthan{enter}");
    });
    it("Should choose appropriate city", () => {
      cy.get(".css-2b097c-container").click({ multiple: true });
      cy.get("#react-select-4-input").type("Jaipur{enter}");
    });
    it("Click on the submit button, message that user is registered appears", () => {
      cy.get("#submit").click();
      cy.get(".table-responsive").should("be.visible");
    });
    it("Verify if modal window has valid data", () => {
      cy.get(".fade.modal.show");
      cy.get(".table-responsive").should("contain", data.USER_FIRST_NAME);
      cy.get(".table-responsive").should("contain", data.USER_LAST_NAME);
      cy.get(".table-responsive").should("contain", data.USER_LAST_NAME);
      cy.get(".table-responsive").should("contain", "Male");
      cy.get(".table-responsive").should("contain", "28 February,2022");
      cy.get(".table-responsive").should("contain", "Sports");
      cy.get(".table-responsive").should("contain", "Music");
      cy.get(".table-responsive").should("contain", "photoCatclear.png");
      cy.get(".table-responsive").should("contain", data.USER_ADDRESS);
      cy.get(".table-responsive").should("contain", "Rajasthan");
      cy.get(".table-responsive").should("contain", "Jaipur");
    });
  });
});
