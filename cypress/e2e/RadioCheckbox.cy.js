describe("checkbox and radio button validation", () => {
    it("checkbox test", () => {

        cy.visit("https://the-internet.herokuapp.com/checkboxes")

        cy.get("input:nth-child(1)").check().should("be.checked")
        cy.xpath("//*[@id='checkboxes']/input[2]").uncheck().should("not.be.checked")

        //unchecking all
        cy.get("input:nth-child(1)").uncheck().should("not.be.checked")

        //checking all
        cy.get("input[type='checkbox']").check().should("be.checked")

            //get first and last

        cy.get("input[type='checkbox']").first().uncheck().should("not.be.checked")
        cy.get("input[type='checkbox']").last().uncheck().should("not.be.checked")



    })

    it("radio button", () => {
        cy.visit("https://materializecss.com/radio-buttons.html");

        //checking intitally whether first radio button checked and second uncheck and after click check vice-versa

        cy.get("input[name='group1']").should("be.checked");
        cy.get("#radio > form > p:nth-child(2) > label > span").should("not.be.checked");


        cy.xpath("//*[@id='radio']/form/p[2]//input").check({ force: true }).should("be.checked");
        cy.xpath("//*[@id='radio']/form/p[1]//input").should("not.be.checked");


    })
})