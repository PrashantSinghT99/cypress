describe("xpathlocators", () => {
    it("xpathlocators test", () => {
        cy.visit(
            "http://www.automationpractice.pl/index.php"
        );

        cy.xpath("//*[@id='block_top_menu']/ul/li[2]/a").click();

        cy.xpath("//*[@id='center_column']/ul/li").should("have.length", 5);
    });

    it("xpathlocators test", () => {
        cy.visit(
            "http://www.automationpractice.pl/index.php"
        );

        cy.xpath("//*[@id='block_top_menu']/ul/li[2]/a").click();

        cy.xpath("//*[@id='center_column']/ul").xpath("./li").should("have.length", 5);
    });
});