class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
            adminButton: '[href="/web/index.php/admin/viewAdminModule"]',
            pimButton: '[href="/web/index.php/pim/viewPimModule"]'

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