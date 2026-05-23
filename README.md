# Cypress Automation Portfolio

End-to-end and API automation examples built with Cypress. This project demonstrates practical QA automation patterns across UI workflows, HTTP APIs, fixtures, custom Cypress commands, page objects, file upload, iframe handling, assertions, browser dialogs, tables, tabs, and mouse interactions.

## Tech Stack

- Cypress 13
- JavaScript
- Mocha and Chai assertions
- Cypress Mochawesome Reporter
- Cypress plugins for iframe, XPath, file upload, and drag-and-drop support

## What This Project Demonstrates

- UI test automation for public demo applications
- API validation with `cy.request()`
- Page Object Model for login workflows
- Data-driven tests using JSON fixtures
- Custom Cypress commands for reusable actions
- Assertions for URL, text, visibility, state, and API responses
- File upload, iframe, alert, table, tab, and mouse operation scenarios
- Screenshot and video capture configuration

## Resume Talking Points

- Built a Cypress automation portfolio covering UI and API testing patterns.
- Organized specs by capability to make the suite easy to navigate and extend.
- Applied reusable Cypress commands and Page Object Model structure for maintainable flows.
- Used fixtures for data-driven validation and file-based test scenarios.
- Configured headless execution, screenshots, videos, and Mochawesome reporting.

## Project Structure

```text
cypress/
  e2e/
    api/                   API test examples
    ui/
      assertions/          CSS, XPath, and assertion examples
      components/          Alerts, forms, tables, tabs, and iframe specs
      files/               Fixture reads and upload scenarios
      interactions/        Mouse, scroll, drag-and-drop examples
      orangehrm/           Login workflows and data-driven tests
      portfolio/           Portfolio smoke and screenshot examples
  fixtures/                Test data and upload files
  pages/                   Page Object Model classes
  support/                 Cypress support files and custom commands
cypress.config.js          Cypress runtime and reporter configuration
package.json               Project scripts and dependencies
```

## Getting Started

Install dependencies:

```bash
npm install
```

Open Cypress in interactive mode:

```bash
npm run cy:open
```

Run the full suite in headless mode:

```bash
npm test
```

Run only API specs:

```bash
npm run test:api
```

Run only UI specs:

```bash
npm run test:ui
```

## Reports And Artifacts

The project is configured to use `cypress-mochawesome-reporter`. Cypress videos and screenshots are generated during headless execution and ignored from git to keep the repository clean.

## Notes

These tests use public demo websites, so availability or UI changes on those external sites can affect execution. The suite is structured as a portfolio and learning project, with examples organized by Cypress capability.
