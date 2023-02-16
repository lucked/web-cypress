import { users, routes } from '../../helpers'
import '@testing-library/cypress/add-commands'

const commands = {
  logInAdopter(data = {}) {
    cy.findByTestId('input-loginEmail').type(data.email || 'luckedlucas+1@gmail.com' || users.primary.email)
    cy.findByTestId('input-loginPassword').type(data.password || users.primary.password)
    cy.findByTestId('logincomponent.continue').click()
    cy.wait(5000)
  },
  applyToPet(data = {}) {
    cy.wait(1000)
    cy.visit(routes.adopterUrl + data.pet_uuid)
    cy.findByTestId('freecard.adoptme').click()
    cy.wait(3000)
    cy.findByTestId('Submit').click()
    cy.wait(25000)
    expect(cy.findByTestId('alert_success'))
  },
  payThePet(data = {}) {
    cy.wait(1000)
    cy.visit(routes.adopterUrl + 'checkout/' + data.application_uuid)
    cy.wait(10000)
    cy.findAllByTestId('donation_20').first().click()
    cy.wait(1000)
    cy.findByTestId('checkout.confirmpayment').click()
  },
}

export default commands
