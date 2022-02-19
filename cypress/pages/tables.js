class FormRegistration {
    get firstUserCells() {
      return cy.get('.rt-table .rt-tr-group:first-child .rt-tr .rt-td');
    }
  }
  
  class UserTable {
    get tableCell() {
      return cy.get('.rt-td');
    }
  
    get firstNameHeaderCell() {
      return cy.get('.rt-th:nth-child(1)');
    }
  
    get lastNameHeaderCell() {
      return cy.get('.rt-th:nth-child(2)');
    }
  
    get ageHeaderCell() {
      return cy.get('.rt-th:nth-child(3)');
    }
  
    get emailHeaderCell() {
      return cy.get('.rt-th:nth-child(4)');
    }
  
    get salaryHeaderCell() {
      return cy.get('.rt-th:nth-child(5)');
    }
  
    get departmentHeaderCell() {
      return cy.get('.rt-th:nth-child(6)');
    }
  
    get searchBox() {
      return cy.get('#searchBox');
    }
  
    get addNewRecordButton() {
      return cy.get('#addNewRecordButton');
    }
  
    get submitModalButton() {
      return cy.get('.modal-content #submit');
    }
  
    get firstCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(1)');
    }
  
    get secondCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(2)');
    }
  
    get thirdCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(3)');
    }
  
    get fourthCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(4)');
    }
  
    get fifthCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(5)');
    }
  
    get sixthCellOnRow() {
      return cy.get('.rt-tr-group .rt-td:nth-child(6)');
    }
  
    get modalDialog() {
      return cy.get('.modal-dialog');
    }
  
    get firstNamePopupField() {
      return cy.get('#firstName');
    }
  
    get lastNamePopupField() {
      return cy.get('#lastName');
    }
  
    get userEmailPopupField() {
      return cy.get('#userEmail');
    }
  
    get userAgePopupField() {
      return cy.get('#age');
    }
  
    get userSalaryPopupField() {
      return cy.get('#salary');
    }
  
    get userDepartmentPopupField() {
      return cy.get('#department');
    }
  
    get modalHeaderCloseButton() {
      return cy.get('.modal-header .close');
    }
  
    get editButton() {
      return cy.get('#edit-record-1');
    }
  
    get deleteButton() {
      return cy.get('#delete-record-1');
    }
  
}
  
  class UserForm {
    get fullNameField() {
      return cy.get('#userForm #userName');
    }
  
    get userEmailField() {
      return cy.get('#userForm #userEmail');
    }
  
    get currentAddressField() {
      return cy.get('#userForm #currentAddress');
    }
  
    get secondaryAddressField() {
      return cy.get('#userForm #permanentAddress');
    }
  
    get submitButton() {
      return cy.get('#userForm #submit');
    }
  
    get outputName() {
      return cy.get('#output #name');
    }
  
    get outputEmail() {
      return cy.get('#output #email');
    }
  
    get outputCurrentAddress() {
      return cy.get('#output #currentAddress');
    }
  
    get outputPermanentAddress() {
      return cy.get('#output #permanentAddress');
    }
  }
  
  export { FormRegistration, UserTable, UserForm };