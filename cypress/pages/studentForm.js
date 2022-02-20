class RegistrationFormPage {
  get submitBtn() {
    return cy.get("#submit");
  }
  open() {
    cy.visit("https://demoqa.com/automation-practice-form");
  }
  get firstNameInput() {
    return cy.get("input#firstName");
  }

  get lastNameInput() {
    return cy.get("input#lastName");
  }

  get emailInput() {
    return cy.get("input#userEmail");
  }

  get mobileInput() {
    return cy.get("input#userNumber");
  }

  get userForm() {
    return cy.get("form#userForm");
  }

  get maleGenderRadioButton() {
    return cy.get('input[name="gender"]').eq(0);
  }

  get femaleGenderRadioButton() {
    return cy.get('input[name="gender"]').eq(1);
  }

  get otherGenderRadioButton() {
    return cy.get('input[name="gender"]').eq(2);
  }

  get dateOfBirthDatepicker() {
    return cy.get("div.react-datepicker__input-container");
  }

  get dateOfMonthDatepicker() {
    return cy.get("select.react-datepicker__month-select");
  }

  get dateOfYearDatepicker() {
    return cy.get("select.react-datepicker__year-select");
  }

  get dateOfDayDatepicker() {
    return cy.get(
      "div.react-datepicker__day:not(.react-datepicker__day--outside-month)"
    );
  }

  get subjectsDropdown() {
    return cy.get('div#subjectsContainer');
  }

  get subjectLabels() {
    return cy.get('div.subjects-auto-complete__multi-value__label');
  }

  get sportsHobbyCheckbox() {
    return cy.get('input[type="checkbox"]').eq(0);
  }

  get readingHobbyCheckbox() {
    return cy.get('input[type="checkbox"]').eq(1);
  }

  get musicHobbyCheckbox() {
    return cy.get('input[type="checkbox"]').eq(2);
  }

  get hobbyLabels() {
    return cy.get("label.custom-control-label");
  }

  get currentAddress() {
    return cy.get("textarea#currentAddress");
  }

  get stateDropdown() {
    return cy.get("div#state");
  }

  get dropdownMenu() {
    return cy.get('div[class*="menu"]');
  }

  get cityDropdown() {
    return cy.get("div#city");
  }

  get selectFileInput() {
    return cy.get("input#uploadPicture");
  }

  uploadFile(fileName) {
    const fixtureFolderPath = Cypress.config("fixturesFolder");
    this.selectFileInput.selectFile(`${fixtureFolderPath}/${fileName}`);
  }
}

export { RegistrationFormPage };
