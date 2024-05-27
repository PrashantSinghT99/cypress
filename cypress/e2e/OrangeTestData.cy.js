describe("test data from fixtures", () => {
    let username;
    let password;
    let result;
    before("initialization of fixtures before test execution", () => {
        cy.fixture("data").then((data) => {
            username = data.username;
            password = data.password;
            result = data.result
        })
    })
    it("fetching data from fixtures", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
//         const username = Cypress.env('username');
//   cy.log(username);
        cy.get("input[placeholder='Username']").type(username);
        cy.get("input[placeholder='Password']").type(password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").contains(result);
    })
})