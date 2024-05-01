import 'cypress-file-upload';
describe("File Upload", () => {
    beforeEach("Launch application", () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
    })
    it("Single file upload", () => {
        cy.get("#file-upload").attachFile('test1.text')
        cy.get("#file-submit").click();
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })
    it("Rename file while upload", () => {
        cy.get("#file-upload").attachFile({ filePath: 'test1.text', fileName: "testfile.text" })
        cy.get("#file-submit").click();
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })

    it("Drag and drop to upload file", () => {
        cy.get('#drag-drop-upload')
            .attachFile('test1.text', { subjectType: 'drag-n-drop' });
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should("have.text", "test1.text")
    })
    it("Multiple file upload", () => {
        cy.get("#file-upload").attachFile(['test1.text', 'test2.text'])
        cy.get("#file-submit").click();
        cy.wait(2000)
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    })
    it('File upload - Shadow Dom', () => {
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile("test1.text");
        cy.wait(2000);
        cy.get('.smart-item-name', { includeShadowDom: true }).should("have.text",'test1.text');

    })
})