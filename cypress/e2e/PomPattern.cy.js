import LoginPage from "../PageObjects/LoginPage";
describe("pom pattern tests", () => {
    //normal test
    it("normal test case flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains("Dashboard");
    })
    //pom test and separation logic
    it.only("pom test case flow", () => {
        const login = new LoginPage();
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        login.setUserName("Admin")
        login.setPassWord("admin123")
        login.clickLoginButton();
        login.validateLogin("Dashboard")

    })
    //using fixtures
    it.only("pom test case flow", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture('data3').then((data) => {
            data.forEach((user) => {
                const login = new LoginPage();
                login.setUserName(user.username)
                login.setPassWord(user.password)
                login.clickLoginButton();
                login.validateLogin(user.result)
                login.addWait()
                login.logOutApplication()
                login.addWait()
            })
        })
    })

})



