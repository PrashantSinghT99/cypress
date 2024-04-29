

describe("handling tabs approach 1", () => {
    it.skip("validation of tabs", () => {

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke('removeAttr', 'target').click();

        cy.get("div[class='example'] h3").should("have.text", "New Window");
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new");

        cy.go('back');
    })

    it("validation of tabs", () => {

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("#content > div > a").then((e) => {
            let url=e.prop('href');
            cy.visit(url);
        });

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(2000);

        cy.go('back');

    })
})