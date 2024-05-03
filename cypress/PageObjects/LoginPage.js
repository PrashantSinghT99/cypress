class LoginPage {

    usernameLocator = "input[placeholder='Username']"
    passwordLocator = "input[placeholder='Password']"
    buttonLocator = "button[type='submit']"
    resultLocator = '.oxd-topbar-header-breadcrumb > .oxd-text'
    setUserName(username) {
        cy.get(this.usernameLocator).type(`${username}`);
    }
    setPassWord(password) {
        cy.get(this.passwordLocator).type(`${password}`);
    }
    clickLoginButton() {
        cy.get(this.buttonLocator).click();
    }
    validateLogin(result) {
        cy.get(this.resultLocator).contains(`${result}`);
    }
    addWait() {
        cy.wait(2000)
    }
    logOutApplication() {
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    }

}

export default LoginPage;