class CheckoutPage {
    getFirstName() {
        return cy.get('[data-test="firstName"]')
    }

    getLastName() {
        return cy.get('[data-test="lastName"]')
    }

    getPostalCode() {
        return cy.get('[data-test="postalCode"]')
    }

    getContinueButton() {
        return cy.get('[data-test="continue"]')
    }

    getCheckoutTitle() {
        return cy.get(".title")
    }

    fillCheckoutInformation(firstName, lastName, postalCode) {
        this.getFirstName().type(firstName)
        this.getLastName().type(lastName)
        this.getPostalCode().type(postalCode)
    }

    continueToOverview() {
        this.getContinueButton().click()
    }

    verifyOverviewPage() {
        this.getCheckoutTitle().should("have.text", "Checkout: Overview")
    }
    getFinishButton() {
    return cy.get('[data-test="finish"]')
    }

    finishOrder() {
        this.getFinishButton().click()
    }

    verifyOrderComplete() {
        cy.get(".complete-header")
            .should("have.text", "Thank you for your order!")
    }
}

export default CheckoutPage