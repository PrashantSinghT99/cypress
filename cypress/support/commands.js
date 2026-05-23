/// <reference types="Cypress"/>
/// <reference types="cypress-xpath" />

Cypress.Commands.add("getCustomIframe", (iframeLocator) => {
  return cy.get(iframeLocator).its("0.contentDocument.body").should("be.visible").then(cy.wrap);
});

Cypress.Commands.add("clickLink", (linkText) => {
  cy.contains("a", linkText).click();
});

Cypress.Commands.add("loginapp", (username, password) => {
  cy.get("input[placeholder='Username']").type(username);
  cy.get("input[placeholder='Password']").type(password);
  cy.get("button[type='submit']").click();
});
