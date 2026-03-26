import userData from '../fixtures/users/userdata.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/dashboardPage.js';
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorslist = {

    sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']",
    countryMaritalField: "[tabindex='0']"


  }

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    

    cy.get(selectorslist.firstNameField).clear().type('firstnameTest')
    cy.get(selectorslist.lastNameField).clear().type('lastNameTest')
    cy.get(selectorslist.genericField).eq(4).clear().type('Employee')
    cy.get(selectorslist.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorslist.genericField).eq(6).clear().type('DriversTest')
    cy.get(selectorslist.dateField).eq(0)
      .click()            // abre o calendário
      .clear()            // limpa
      .type('2026-10-03{enter}') // digita e confirma com ENTER
    cy.get(selectorslist.countryMaritalField).eq(0).click()
    cy.contains('Belgian').scrollIntoView().click()
    cy.get(selectorslist.countryMaritalField).eq(1).click()
    cy.contains('Married').click()
    cy.get(selectorslist.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')


    //cy.get(selectorslist.genericField).eq(7).click().clear().type('2026-16-03{enter}') 
    //cy.get(selectorslist.dateField).eq(0).click().clear().type('2026-10-03{enter}') 
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')


  })

  it('Login - Fail', () => {
    cy.clearCookies()
    cy.clearLocalStorage()

    loginPage.accessLoginPage()
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    )

    loginPage.checkAccessInvalid()
  })



  //it('Login - Fail', () => {
  //cy.visit('auth/login')
  // cy.get(selectorslist.usernameField).type(userData.userFail.username)
  //cy.get(selectorslist.passwordField).type(userData.userFail.password)
  //cy.get(selectorslist.loginButton).click()
  //cy.get(selectorslist.wrongCredentialAlert)

  // })
})