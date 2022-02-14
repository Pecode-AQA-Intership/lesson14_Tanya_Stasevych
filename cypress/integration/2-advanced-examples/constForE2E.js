const { faker } = require("@faker-js/faker");
const USER_FIRST_NAME = faker.name.firstName();
const USER_LAST_NAME = faker.name.lastName();
const USER_EMAIL = faker.internet.email();
const USER_NUMBER = faker.random.number(3409309689, 5504867853, 7858768493);
const USER_ADDRESS = faker.address.secondaryAddress()
 export {faker, USER_EMAIL, USER_NUMBER, USER_LAST_NAME, USER_FIRST_NAME, USER_ADDRESS}