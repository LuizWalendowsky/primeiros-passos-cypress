import userData from '../fixtures/users/userdata.json';


describe('Orange HRM Tests', () => {

  const selectorslist = {
  usernameField: '[name="username"]',
  passwordField: '[name="password"]',
  loginButton: '[type="submit"]',
  sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  dateCloseButton: ".--close",
  submitButton: "[type='submit']"
 

  }

  it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorslist.usernameField).type(userData.userSuccess.username)
    cy.get(selectorslist.passwordField).type(userData.userSuccess.password)
    cy.get(selectorslist.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorslist.dashboardGrid)
    cy.get(selectorslist.myInfoButton).click()
    cy.get(selectorslist.firstNameField).clear().type('firstnameTest')
    cy.get(selectorslist.lastNameField).clear().type('lastNameTest')
    cy.get(selectorslist.genericField).eq(4).clear().type('Employee')
    cy.get(selectorslist.genericField).eq(5).clear().type('OtherIdTest')
    cy.get(selectorslist.genericField).eq(6).clear().type('DriversTest')
    cy.get(selectorslist.dateField).eq(0)
    .click()            // abre o calendário
    .clear()            // limpa
    .type('2026-10-03{enter}') // digita e confirma com ENTER
    cy.get(selectorslist.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get
    

    //cy.get(selectorslist.genericField).eq(7).click().clear().type('2026-16-03{enter}') 
    //cy.get(selectorslist.dateField).eq(0).click().clear().type('2026-10-03{enter}') 
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')
    //cy.get(selectorslist.genericField).eq(4).type ('NickNameTest')


  })
  it('Login - Fail', () => {
    cy.visit('auth/login')
    cy.get(selectorslist.usernameField).type(userData.userFail.username)
    cy.get(selectorslist.passwordField).type(userData.userFail.password)
    cy.get(selectorslist.loginButton).click()
    cy.get(selectorslist.wrongCredentialAlert)
    
  })
})