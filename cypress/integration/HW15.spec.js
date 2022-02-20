import { randomUserData } from "../constants/userData";
import { FormRegistration, UserTable } from "../pages/tables";
describe("Lesson15", () => {
  const formRegistration = new FormRegistration();
  const userTable = new UserTable();

  beforeEach(() => {
    cy.visit("https://demoqa.com/webtables");
  });

  context("User creating", () => {
    it("Should open registration form", () => {
      userTable.addNewRecordButton.click();

      userTable.modalDialog.should("exist");
    });
    it("Should not create new user if modal closed", () => {
      userTable.addNewRecordButton.click();
      userTable.firstNamePopupField.type(randomUserData.FAKE_FIRST_NAME);
      userTable.lastNamePopupField.type(randomUserData.FAKE_LAST_NAME);
      userTable.userEmailPopupField.type(randomUserData.FAKE_EMAIL);
      userTable.userAgePopupField.type(67);
      userTable.userSalaryPopupField.type(7678);
      userTable.userDepartmentPopupField.type(randomUserData.DEPARTMENT);

      userTable.modalHeaderCloseButton.click();

      cy.contains(randomUserData.FAKE_FIRST_NAME).should("not.exist");
      cy.contains(randomUserData.FAKE_LAST_NAME).should("not.exist");
      cy.contains(randomUserData.FAKE_EMAIL).should("not.exist");
      cy.contains(999).should("not.exist");
      cy.contains(999999).should("not.exist");
      cy.contains(randomUserData.DEPARTMENT).should("not.exist");
    });
    it("Should create new user", () => {
      userTable.addNewRecordButton.click();
      userTable.firstNamePopupField.type(randomUserData.FAKE_FIRST_NAME);
      userTable.lastNamePopupField.type(randomUserData.FAKE_LAST_NAME);
      userTable.userEmailPopupField.type(randomUserData.FAKE_EMAIL);
      userTable.userAgePopupField.type(randomUserData.AGE);
      userTable.userSalaryPopupField.type(randomUserData.SALARY);
      userTable.userDepartmentPopupField.type(randomUserData.DEPARTMENT);

      userTable.submitModalButton.click();

      cy.contains(randomUserData.FAKE_FIRST_NAME).should("exist");
      cy.contains(randomUserData.FAKE_LAST_NAME).should("exist");
      cy.contains(randomUserData.FAKE_EMAIL).should("exist");
      cy.contains(randomUserData.AGE).should("exist");
      cy.contains(randomUserData.SALARY).should("exist");
      cy.contains(randomUserData.DEPARTMENT).should("exist");
    });
  });

  context("Operations with user", () => {
    it("Should have User record edit button", () => {
      userTable.editButton.should("exist");
    });
    it("Should open edit modal on user edit button click", () => {
      cy.get(formRegistration.firstUserCells);
      userTable.editButton.click();
      userTable.modalDialog.should("exist");
    });

    it("Should be able to edit each field in the modal", () => {
      userTable.editButton.click();

      userTable.firstNamePopupField
        .clear()
        .type(randomUserData.FAKE_FIRST_NAME);
      userTable.lastNamePopupField.clear().type(randomUserData.FAKE_LAST_NAME);
      userTable.userEmailPopupField.clear().type(randomUserData.FAKE_EMAIL);
      userTable.userAgePopupField.clear().type(randomUserData.AGE);
      userTable.userSalaryPopupField
        .clear()
        .type(randomUserData.SALARY);
      userTable.userDepartmentPopupField
        .clear()
        .type(randomUserData.DEPARTMENT);

      userTable.firstNamePopupField.should(
        "have.value",
        randomUserData.FAKE_FIRST_NAME
      );
      userTable.lastNamePopupField.should(
        "have.value",
        randomUserData.FAKE_LAST_NAME
      );
      userTable.userEmailPopupField.should(
        "have.value",
        randomUserData.FAKE_EMAIL
      );
      userTable.userAgePopupField.should("have.value", randomUserData.AGE);
      userTable.userSalaryPopupField.should(
        "have.value",
        randomUserData.SALARY
      );
      userTable.userDepartmentPopupField.should(
        "have.value",
        randomUserData.DEPARTMENT
      );
    });
    it("Should delete User on delete user button click", () => {
      formRegistration.firstUserCells.then((oldCells) => {
        const oldFirstName = oldCells.get(0).innerText;
        const oldLastName = oldCells.get(1).innerText;
        const oldAge = oldCells.get(2).innerText;
        const oldEmail = oldCells.get(3).innerText;
        const oldSalary = oldCells.get(4).innerText;
        const oldDepartment = oldCells.get(5).innerText;

        userTable.deleteButton.click();

        formRegistration.firstUserCells.then((newCells) => {
          expect(oldFirstName).to.not.equal(newCells.get(0).innerText);
          expect(oldLastName).to.not.equal(newCells.get(1).innerText);
          expect(oldAge).to.not.equal(newCells.get(2).innerText);
          expect(oldEmail).to.not.equal(newCells.get(3).innerText);
          expect(oldSalary).to.not.equal(newCells.get(4).innerText);
          expect(oldDepartment).to.not.equal(newCells.get(5).innerText);
        });
      });
    });
  });
  it("Should find User by First name", () => {
    userTable.searchBox.type("Alden");

    formRegistration.firstUserCells.then((cells) => {
      expect(cells.get(0).innerText).equal("Alden");
    });
  });

  it("Should find User by Last name", () => {
    userTable.searchBox.type("Cantrell");

    formRegistration.firstUserCells.then((cells) => {
      expect(cells.get(1).innerText).equal("Cantrell");
    });
  });
});
