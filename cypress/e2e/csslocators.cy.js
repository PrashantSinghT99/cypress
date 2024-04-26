describe("csslocators", () => {
    it("csslocators test", () => {
        cy.visit(
            "https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=676742245123&hvpos=&hvnetw=g&hvrand=9559013672869182498&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9179342&hvtargid=kwd-10573980&hydadcr=14453_2367553&gad_source=1"
        );

        cy.get("#twotabsearchtextbox").type("phone holder");

        cy.get("input[type='submit']").click();

        cy.get(".a-color-state.a-text-bold").contains("phone holder");
    });
});

