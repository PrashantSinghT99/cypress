import LoginPage from "../../../pages/LoginPage";
describe("pom pattern tests", () => {
    it("normal test case flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard");
    })
    it("logs in with the page object model", () => {
        const login = new LoginPage();
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        login.setUserName("Admin");
        login.setPassWord("admin123");
        login.clickLoginButton();
        login.validateLogin("Dashboard");
    });

    it("logs in with fixture-driven users", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('data3').then((data) => {
            data.forEach((user) => {
                const login = new LoginPage();
                login.setUserName(user.username);
                login.setPassWord(user.password);
                login.clickLoginButton();
                login.validateLogin(user.result);
                login.logOutApplication();
            });
        });
    });
});
