describe("Assertions", () => {

    it("Implicit assertion test", () => {

        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");

        // cy.url().should("include", "PrashantSingh");
        // cy.url().should("contains", "prashantsinght99");
        // cy.url().should("eq", "https://prashantsinght99.github.io/PrashantSingh.github.io/");

        //can chain them and use and instead should

        cy.url().should("include", "PrashantSingh")
        .and("contains", "prashantsinght99")
        .and("eq", "https://prashantsinght99.github.io/PrashantSingh.github.io/")
        .and("not.contain","pst99")


        cy.get('.latestphoto__img').should("be.visible");
        cy.get('.latestphoto__img').should("exist");

        cy.xpath("//a").should("have.length",15);


        cy.get('#name').scrollIntoView();
        cy.get('#name').type("prashant");
        cy.get('#name').should("have.value","prashant");
    })



    it("Explicit assertion test", () => {

        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");

        cy.get('.name > h1').scrollIntoView();

        let expectedname="PRASHANT SINGH"
        let notexpectedname="Prashant Singh"

        cy.get('.name > h1').then((element)=>
    {
           let actualname=element.text();

           expect(expectedname).to.equal(actualname);
           expect(expectedname).to.not.equal(notexpectedname);


           assert.equal(actualname,expectedname);
           assert.notEqual(actualname,notexpectedname);
    })

    })

})
