import { routes } from '../../support/helpers'

describe('Adopt a pet', () => {
  it.only('should create a pet', () => {
    cy.viewport(1920, 961)
    cy.visit(routes.adopterUrl + 'login')
    cy.logInAdopter()
    const pet_uuid = 'pet/070171d5-0ce1-4b02-920d-cdc799272aed'
    cy.applyToPet({ pet_uuid })
  })
})
