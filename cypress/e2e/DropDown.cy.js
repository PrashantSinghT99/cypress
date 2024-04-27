

describe("dropdown validation", () => {
    it.skip("validation of select dropdown", () => {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get("#dropdown").select("2").should("have.value", "2");
    })
    //handling dropdown with textbox suggestion without select

    it.skip("validation without select dropdown", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Sri Lanka").type("{enter}");
        cy.get("#select2-billing_country-container").should("have.text", "Sri Lanka");


    })

    //two ways of dynamic dropdown handling

    it.skip("validation with dynamic suggestion", () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("cypress automation")

        cy.xpath("//*[@id='Alh6id']/div[1]/div/ul/li").contains("tutorial").click();
        cy.get("textarea[name='q']").should("have.text", "cypress automation tutorial")


    })

    it("validation with dynamic suggestion alternate way", () => {
        cy.visit("https://www.google.com/")
        cy.get("textarea[name='q']").type("cypress automation")

        cy.wait(2000)

        cy.get('div.wM6W7d>span').should('have.length',13)
        cy.get('div.wM6W7d>span').each( ($el, index, $list)=>{
            if($el.text()=='cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        } )
        // cy.wait(1000)

        cy.get("textarea[name='q']").should('have.text','cypress automation tutorial')


      
    })


})

