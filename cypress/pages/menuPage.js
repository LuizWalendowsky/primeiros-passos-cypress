class MenuPage {

    selectorsList() {
        const selectors = {
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
        return selectors
    }
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
        

    }
    accessPerformanceButton() {
        cy.get(this.selectorsList().performanceButton).click()
        
    }
    
    accessAdminButton(){
        cy.get(this.selectorsList().adminButton).click()
       


    }
    acessPimButton(){
        cy.get(this.selectorsList().pimButton).click()
       

    }
    
}

export default MenuPage