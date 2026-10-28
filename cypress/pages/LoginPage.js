class LoginPage {

    visit() {
        cy.visit("https://www.saucedemo.com/")
    }

    getUsername() {
        return cy.get('[data-test="username"]')
    }

    getPassword() {
        return cy.get('[data-test="password"]')
    }

    getLoginButton() {
        return cy.get('[data-test="login-button"]')
    }

    getErrorMessage() {
    return cy.get('[data-test="error"]')
    }

    login(username, password) {
        this.getUsername().type(username)
        this.getPassword().type(password)
        this.getLoginButton().click()
    }
}

export default LoginPage