
import LoginPage from "../pages/LoginPage"

describe("SauceDemo Login Tests", () => {

    const loginPage = new LoginPage()

    beforeEach(() => {
        cy.fixture("loginData").as("users")
    })

    it("should login successfully with valid credentials", function () {

        // loginPage.visit()

        cy.login(
            this.users.validUser.username,
            this.users.validUser.password
        )

        cy.url().should("include", "/inventory.html")
        cy.get(".inventory_list").should("be.visible")

    })

    it("should show an error for invalid credentials", function () {


        cy.login(
            this.users.invalidUser.username,
            this.users.invalidUser.password
        )

        loginPage.getErrorMessage()
            .should("be.visible")
            .and("contain.text", "Username and password do not match")

    })

})
