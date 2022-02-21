import 'cypress-file-upload';
import { RegistrationFormPage } from '../pages/studentForm';
import { SubmitStudentDataForm } from '../pages/submitForm';

import { randomUserData,GENDER ,SUBJECT, HOBBIES, STATES, UTTAR_PRADESH_STATE_CITIES, HARYANA_STATE_CITIES } from '../constants/userData'


describe('Lesson16', () => {
   
    const registrationFormPage = new RegistrationFormPage();
    const submitStudentDataForm = new SubmitStudentDataForm();

    before(() => {
      registrationFormPage.open();
    });

    it('Should open Student Registration Form page', () => {
      registrationFormPage.userForm.should('exist');
    });

    it('Should fill First Name', () => {
      registrationFormPage.firstNameInput
        .type(randomUserData.FAKE_FIRST_NAME)
        .should('have.value', randomUserData.FAKE_FIRST_NAME);
    });

    it('Should fill Last Name', () => {
      registrationFormPage.lastNameInput
        .type(randomUserData.FAKE_LAST_NAME)
        .should('have.value', randomUserData.FAKE_LAST_NAME);
    });

    it('Should fill Email', () => {
      registrationFormPage.emailInput
        .type(randomUserData.FAKE_EMAIL)
        .should('have.value', randomUserData.FAKE_EMAIL);
    });

    it('Should choose female gender radio button', () => {
      registrationFormPage.femaleGenderRadioButton.click({ force: true });
      registrationFormPage.femaleGenderRadioButton.should('be.checked');
    });

    it('Should fill Mobile input', () => {
      registrationFormPage.mobileInput
        .type(randomUserData.FAKE_MOBILE)
        .should('have.value', randomUserData.FAKE_MOBILE);
    });

    it('Should fill DatePicker input', () => {
      registrationFormPage.dateOfBirthDatepicker.click();

      registrationFormPage.dateOfMonthDatepicker.select(
        randomUserData.FAKE_MONTH,
      );
      registrationFormPage.dateOfYearDatepicker.select(
        randomUserData.FAKE_YEAR,
      );
      registrationFormPage.dateOfDayDatepicker
        .contains(randomUserData.FAKE_DAY)
        .click();
    });

    it('Should select value from Subjects dropdown', () => {
      registrationFormPage.subjectsDropdown.click();
      registrationFormPage.subjectsDropdown.should("be.visible").type("history{enter}")
      
    });

    it('Should check Hobbies checkbox', () => {
      registrationFormPage.musicHobbyCheckbox.click({ force: true });
      registrationFormPage.hobbyLabels.contains(HOBBIES.music).should('exist');
    });

    it('Should upload the picture', () => {
      registrationFormPage.uploadFile('photoCat.png');
    });

    it('Should fill Current Address field', () => {
      registrationFormPage.currentAddress
        .type(randomUserData.FAKE_CURRENT_ADDRESS)
        .should('have.value', randomUserData.FAKE_CURRENT_ADDRESS);
    });

    it('Should select value from State dropdown', () => {
      registrationFormPage.stateDropdown.click();
      registrationFormPage.dropdownMenu.contains(STATES.haryana).click();
    });

    it('Should select value from City dropdown', () => {
      registrationFormPage.cityDropdown.click();
      registrationFormPage.dropdownMenu
        .contains(HARYANA_STATE_CITIES.karnal)
        .click();
    });

    it('Should submit form', () => {
      registrationFormPage.submitBtn.click();
    });

    it('Should have correct User Data in submit user data modal', () => {
      submitStudentDataForm.studentNameValue.contains(
        `${randomUserData.FAKE_FIRST_NAME} ${randomUserData.FAKE_LAST_NAME}`,
      );
      submitStudentDataForm.studentEmailValue.contains(
        randomUserData.FAKE_EMAIL,
      );
      submitStudentDataForm.studentGenderValue.contains(GENDER.female);
      submitStudentDataForm.studentMobileValue.contains(
        randomUserData.FAKE_MOBILE,
      );
      
      submitStudentDataForm.studentHobbiesValue.contains(HOBBIES.music);
      submitStudentDataForm.studentPictureValue.contains('photoCat.png');
      submitStudentDataForm.studentAddressValue.contains(
        randomUserData.FAKE_CURRENT_ADDRESS,
      );
      submitStudentDataForm.studentStateAndCityValue.contains(
        `${STATES.haryana} ${HARYANA_STATE_CITIES.karnal}`,
      );
    });
  });
