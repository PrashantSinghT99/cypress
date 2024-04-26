// const cypress = require("cypress");

describe("Launching my portfolio URL", () => {
  it("Test 1 Positive", () => {
    cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
    cy.title().should("eq", "My Portfolio");
  });

  it("Test 2 Negative", () => {
    cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
    cy.title().should("eq", "Someone Portfolio");
  });
});

// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })

// describe("My second Test",function(){
//   it('Validates for false',function(){
//     expect(false).to.equal(false);
//   })
// })
