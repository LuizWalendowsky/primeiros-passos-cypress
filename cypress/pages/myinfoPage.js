class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            submitButton: "[type='submit']",
            countryMaritalField: "[tabindex='0']"
        }
        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversTest, driverLicenseDate) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversTest)
        cy.get(this.selectorsList().dateField).eq(0).click().clear().type(driverLicenseDate)
    }

    fillStatus() {
        cy.get(this.selectorsList().countryMaritalField).eq(0).click()
        cy.contains('Belgian').scrollIntoView().click()
        cy.get(this.selectorsList().countryMaritalField).eq(1).click()
        cy.contains('Married').click()
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Updated')
    }
    
}

export default MyInfoPage