require('@4tw/cypress-drag-drop')
import 'cypress-iframe';
describe("mouse operations", () => {
    it("Mouse Hover", () => {

        cy.visit("https://demo.opencart.com/");
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
            .should("not.be.visible");
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger("mouseover").click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)")
            .should("be.visible");



    })
    it("right click", () => {
        cy.visit("https://the-internet.herokuapp.com/context_menu")
        cy.get("#hot-spot").rightclick();
        cy.on("window:alert", (text) => {
            //   cy.log(text)
            expect(text).to.contains("You selected a context menu");
        })
    })

    it.only("double click", () => {
        //  cy.visit("https://www.plus2net.com/javascript_tutorial/ondblclick-demo2.php");
        // cy.get("#box").dblclick();
        // cy.get("#box").should("have.text","This is double click"); cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded('#iframeResult');  //Load the frame

        //triger()
        cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');

        //dblclick()
        // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
        // cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
    }
        )
   

    it("drag and drop", () => {

        // cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        // cy.get("#column-a").should("have.text","A");
        // cy.get("#column-a").drag("#column-b",{force:true});
        // cy.get("#column-a").should("have.text","B");
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000);
        cy.get('#box6').drag('#box106', { force: true });

    })
    it("scroll to a element", () => {

        cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/")
        cy.get("#bottom > div > div > div.initial > div.name > h1").scrollIntoView({ duration: 2000 });
        cy.get("#bottom > div > div > div.initial > div.name > h1").should("be.visible");
        cy.get('.latestphoto__img').scrollIntoView({ duration: 2000 });
    })
})