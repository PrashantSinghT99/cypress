describe('Reading a JSON file from fixture', () => {
    it('Reads a fixture JSON file', () => {
        cy.fixture('data.json').then((data) => {
            expect(data).to.have.property('username', 'Admin');
            expect(data).to.have.property('password', 'admin123');
            expect(data).to.have.property('result', 'Dashboard');
        });
    });

    it('Reads a fixture text file', () => {
        cy.fixture('readfile.txt').then((data) => {
            expect(data).contains("THIS IS TEST 1 TEXT FILE TO VALIDATE FILE UPLOAD");
            console.log(data);
        });
    });
   
        it.only('Reads a file', () => {
          cy.readFile('cypress/fixtures/readfile.txt').then((data) => {
            expect(data).contains("THIS IS TEST 1 TEXT FILE TO VALIDATE FILE UPLOAD");
            console.log(data);
          });
        });
 
});
