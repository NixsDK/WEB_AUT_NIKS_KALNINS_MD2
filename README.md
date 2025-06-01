# WEB_AUT_Niks_Kalnins_MD2

This repository contains automated test scenarios written with **Cypress** for MD#2 of the Web Automation course.

## ✅ Scenarios Implemented

### 1. Make an Appointment
- Navigates to the Cura Healthcare website
- Logs in using the demo account
- Fills in the appointment form:
  - Facility: Seoul CURA Healthcare Center
  - Hospital readmission: Yes
  - Program: Medicaid
  - Visit date: 30
  - Comment: CURA Healthcare Service
- Verifies all submitted values

### 2. Appointment History is Empty
- Logs in with the same account
- Navigates to the sidebar and clicks "History"
- Verifies that no appointments are listed

## 🔧 Tech Stack
- Cypress 12+
- Node.js
- Mocha (via Cypress test runner)

## 📁 Structure
cypress/
└── e2e/
└── appointment.cy.js
## ⚠️ Notes
- `Cypress.on("uncaught:exception", () => false);` is used to suppress unrelated app errors.
- `.gitignore` includes standard Node + Cypress exclusions.
