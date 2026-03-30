import userData from '../fixtures/users/userdata.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js';
import MyInfoPage from '../pages/myinfoPage.js';

const Chance = require('chance');

const chance = new Chance()
const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password);

    dashboardPage.checkDashboardPage();
    menuPage.accessMyInfo();

    myInfoPage.fillPersonalDetails(chance.first(), chance.last());
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherId', 'driversTest', '2026-26-03');
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });

});