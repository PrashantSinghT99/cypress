describe('capture screenshot', () => {

    it("capturing screenshot manually", () => {
        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
        cy.screenshot("launch") 
        cy.get("section[id='bottom'] h1:nth-child(1)").screenshot("image")
      
    })

    it.only("capturing screenshot and video via terminal on failure", () => {
        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
        cy.get("section[id='bottom'] h1:nth-child(1)").should("have.text","Test Name")
      
    })

})