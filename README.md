# SauceDemo Cypress Automation Project

## Overview
This project automates the main user flows of the SauceDemo web application using Cypress and the Page Object Model (POM) design pattern.

## Tools & Technologies
- Cypress
- JavaScript
- Node.js
- Page Object Model (POM)
- Git and GitHub

## Test Scenarios
- Verify login with valid credentials
- Verify error message for invalid credentials
- Verify the Products page
- Add a product to the shopping cart
- Verify cart contents
- Complete checkout information
- Verify the order confirmation message

## Project Structure
- `cypress/e2e/` — test specifications
- `cypress/pages/` — Page Object Model classes
- `cypress/fixtures/` — test data
- `cypress/support/commands.js` — custom Cypress commands
- `cypress/videos/` — recorded test runs

## How to Run
1. Install dependencies:
   `npm install`
2. Open Cypress:
   `npx cypress open`
3. Run tests in the terminal:
   `npx cypress run`

## Test Credentials
Use the public SauceDemo demo credentials configured in the test fixture. Do not use real or personal credentials.

## Author
Afshan Azhar
