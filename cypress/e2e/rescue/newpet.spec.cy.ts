import { routes } from '../../support/helpers'

describe('new pet', () => {
  it.only('should test all adoption process', () => {
    cy.clearCookies()
    cy.viewport(1920, 961)
    cy.visit(routes.rescueUrl)
    //expect(cy.findByTestId('pets.notification.created'))
    cy.logInRescue()
    const petName = `cypress ${Math.random()}`
    cy.createAPet({ name: petName })
    /*cy.fingPublicPetUrl({ name: petName })
    cy.wait(3000)
    cy.url().then((urlString) => {
      const uuid = urlString.split('/').pop()
      cy.visit(routes.adopterUrl + 'login')
      cy.logInAdopter()
      const pet_uuid = 'pet/' + uuid
      cy.applyToPet({ pet_uuid })
    })
    cy.wait(4000)
    cy.approveApplication({ name: petName })
    cy.wait(15000)
    cy.url().then((urlString) => {
      const application_uuid = urlString.split('/').pop()
      cy.payThePet({ application_uuid: application_uuid })
    })*/
    /*
     */
  })
})
