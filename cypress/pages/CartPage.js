class CartPage {

    getCartTitle() {
        return cy.get(".title")
    }

    getCartItem() {
        return cy.get(".cart_item")
    }

    getCheckoutButton() {
        return cy.get('[data-test="checkout"]')
    }

    verifyCartPage() {
        this.getCartTitle().should("have.text", "Your Cart")
        this.getCartItem().should("be.visible")
        // cy.get('.inventory_item_name')
        // .should('have.text', 'Sauce Labs Backpack');
        // cy.get('[data-test="remove-sauce-labs-backpack"]').click();
        // cy.get('.cart_item').should('not.exist');
    }

    proceedToCheckout() {
        this.getCheckoutButton().click()
    }
}

export default CartPage