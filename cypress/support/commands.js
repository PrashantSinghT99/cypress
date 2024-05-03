// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="Cypress"/>

/// <reference types="cypress-xpath" />

// Cypress.Commands.add('getIframe',(iframeName)=>
// {
// return cy.get(iframeName).its('0.contentDocument.body')
// .should('be.visible')
// .then(cy.wrap)
// })

// iframe custom command
Cypress.Commands.add('getCustomIframe', (iframeLocator) => {
    return cy.get(iframeLocator)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

//Click link on basis of text

Cypress.Commands.add('clickLink', (linkText) => {
    cy.get('a').contains(linkText).click();
})

//Over write contains() 

// Cypress.Commands.overwriteQuery('contains', (originalFn, subject, filter, text, options = {}) => {
//     if (typeof text === 'object') {
//         options = text;
//         text = filter;
//         filter = undefined;
//     }

//     options.matchCase = false;

//     return originalFn(subject, filter, text, options);
// });


Cypress.Commands.add("loginapp", (username, password) => {
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
})