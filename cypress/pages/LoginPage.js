class LoginPage {
    usernameLocator = "input[placeholder='Username']";
    passwordLocator = "input[placeholder='Password']";
    buttonLocator = "button[type='submit']";
    resultLocator = ".oxd-topbar-header-breadcrumb > .oxd-text";
    userMenuLocator = ".oxd-userdropdown-tab";
    logoutLinkLocator = "a[href$='logout']";

    setUserName(username) {
        cy.get(this.usernameLocator).clear().type(username);
    }

    setPassWord(password) {
        cy.get(this.passwordLocator).clear().type(password);
    }

    clickLoginButton() {
        cy.get(this.buttonLocator).click();
    }

    validateLogin(result) {
        cy.get(this.resultLocator).should("contain", result);
    }

    logOutApplication() {
        cy.get(this.userMenuLocator).click();
        cy.get(this.logoutLinkLocator).click();
        cy.get(this.buttonLocator).should("be.visible");
    }
}

export default LoginPage;
