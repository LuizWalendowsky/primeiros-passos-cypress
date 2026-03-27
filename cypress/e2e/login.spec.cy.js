import LoginPage from '../pages/loginPage.js';
import userData from '../fixtures/users/userdata.json';
import DashboardPage from '../pages/dashboardPage.js';

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {


  it('Login - Fail', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userFail.username,userData.userFail.password);
    loginPage.checkAccessInvalid();
  });
   
  it('Login - Sucess', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
  });

});