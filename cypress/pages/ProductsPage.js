
class ProductsPage {

    getPageTitle() {
        return cy.get(".title")
    }

    getInventoryList() {
        return cy.get(".inventory_list")
    }

    getAddToCartButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    getCartLink() {
        return cy.get(".shopping_cart_link")
    }

    verifyProductsPage() {
        this.getPageTitle().should("have.text", "Products")
        this.getInventoryList().should("be.visible")
    }

    addBackpackToCart() {
        this.getAddToCartButton().click()
    }

    openCart() {
        this.getCartLink().click()
    }
}

export default ProductsPage
