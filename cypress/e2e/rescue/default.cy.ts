import { baseUrl, users, routes } from '../../support/helpers'

describe('Login', async () => {
  it('Should successfully log in', () => {
    cy.visit(baseUrl + 'login')
    cy.logIn()
    cy.url().should('include', 'my-account/applications-active')
  })

  it('Should not log in with non-existing user', () => {
    cy.visit(routes.rescueUrl)
    cy.logInRescue()
    cy.get('[data-test="error"]').should('be.visible')
  })
})
