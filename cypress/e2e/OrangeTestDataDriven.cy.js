describe("test data from fixtures", () => {
    it("fetching data from fixtures", () => {
        cy.fixture("data2").then((data) => {
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            data.forEach((user) => {
                const { username, password, result } = user
                cy.get("input[placeholder='Username']").type(username);
                cy.get("input[placeholder='Password']").type(password);
                cy.get("button[type='submit']").click();
                if (username == "Admin" && password == "admin123") {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",result);
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                    cy.wait(2000)
                }
                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text",result);
                }

            }
            )
        })

    })



})