import 'cypress-iframe';
describe("iframes validation", () => {
    it("should interact with elements inside an iframe", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        //returning iframe wrapped in this document
        const iframe = cy.get('#mce_0_ifr')
            .its("0.contentDocument.body")
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Hello {ctrl+a}");

        cy.get("[aria-label='Bold']").click();

        // Perform assertions or other actions outside the iframe
        //cy.get("#submit-button").click();
    });
    //made a custom command in commands.js

    it("Using command", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("Hello {ctrl+a}");

        cy.get("[aria-label='Bold']").click();
    })

    it.only("plugin ", () => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr") //loads the frame 
        cy.getIframe("#mce_0_ifr").clear().type("checking plugin {ctrl+a}")
        cy.get("[aria-label='Bold']").click();
    })
})

