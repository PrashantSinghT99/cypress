describe("custom commands", () => {
    it("click of the link using text", () => {
        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
        cy.clickLink("hosted live version 2");
    })
    it.only("check", () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })
    it("overwriting existing command", () => {

        cy.visit("https://demo.nopcommerce.com/");

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })

    it("Login command", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.loginapp("Admin", "admin123");
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard");
    })
})


