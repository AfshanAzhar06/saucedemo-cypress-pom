import LoginPage from "../pages/LoginPage"
import ProductsPage from "../pages/ProductsPage"
import CartPage from "../pages/CartPage"
import CheckoutPage from "../pages/CheckoutPage"

describe("SauceDemo Purchase Flow", () => {
    const loginPage = new LoginPage()
    const productsPage = new ProductsPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(() => {
        cy.fixture("loginData").as("users")
    })

    it("should add a product and proceed to checkout overview", function () {
        // Login
        loginPage.visit()
        loginPage.login(
            this.users.validUser.username,
            this.users.validUser.password
        )

        // Verify Products Page
        productsPage.verifyProductsPage()

        // Add product to cart
        productsPage.addBackpackToCart()
        productsPage.openCart()

        // Verify Cart
        cartPage.verifyCartPage()

        // Open Checkout
        cartPage.proceedToCheckout()

        // Fill Checkout Information
        checkoutPage.fillCheckoutInformation(
            "Sara",
            "Khan",
            "75000"
        )

        // Continue to Overview
        checkoutPage.continueToOverview()
        checkoutPage.verifyOverviewPage()
        checkoutPage.finishOrder()
        checkoutPage.verifyOrderComplete()
    })
})