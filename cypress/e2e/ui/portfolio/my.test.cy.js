// const cypress = require("cypress");

describe("Launching my portfolio URL", () => {
  it("Test 1 Positive", () => {
    cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
    cy.title().should("eq", "My Portfolio");
  });

  it("validates an incorrect title is not accepted", () => {
    cy.visit("https://prashantsinght99.github.io/PrashantSingh.github.io/");
    cy.title().should("not.eq", "Someone Portfolio");
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
