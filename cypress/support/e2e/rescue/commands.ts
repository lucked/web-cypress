import { users, routes } from '../../helpers'
import '@testing-library/cypress/add-commands'

Cypress.Commands.add('configureCypressTestingLibrary', (config) => {
  cy.configureCypressTestingLibrary(config)
})

const commands = {
  logInRescue(data = {}) {
    cy.findByTestId('input-email2').type(data.email || 'luckedlucas+1@gmail.com' || users.primary.email)
    cy.findByTestId('input-password').type(data.password || users.primary.password)
    cy.findByTestId('globals.login.confirm').click()
  },
  createAPet(data = {}) {
    cy.get('#pets').click()
    cy.findByTestId('pets.addPet').click()
    cy.findByTestId('forms.set_photos').click()
    cy.findByTestId('input-fields.value.name').type(data.name)
    cy.findByTestId('input-fields.value.specie').click()
    cy.contains('li', 'Alpaca').click()
    cy.findByTestId('input-fields.value.length_stay').click()
    cy.findAllByRole('gridcell').first().click()
    cy.findByTestId('input-fields.value.primary_breed').click()
    cy.contains('li', 'Other').click({ force: true })
    cy.findByTestId('input-fields.value.secondary_breed').click()
    cy.contains('li', 'Other').click({ force: true })
    cy.findByTestId('input-fields.value.size').click()
    cy.contains('li', 'Small').click()
    cy.findByTestId('input-fields.value.age').click()
    cy.contains('li', 'Adult').click()
    cy.findByTestId('forms.set_pet_info').click()
    cy.findByTestId('forms.set_pet_info').click()
    cy.findByTestId('input-fields.value.hasPrice').click()
    cy.findByTestId('pet.create.pick_one').click()
    cy.contains('li', 'Headquarter').click()
    cy.findByTestId('forms.adoption_fee').click()
    cy.wait(3000)
    expect(cy.findByTestId('pets.notification.created'))
  },
  fingPublicPetUrl(data = {}) {
    cy.wait(3000)
    cy.get('#pets').click()
    cy.get('input[name="search"]').click().type(data.name).type('{enter}')
    cy.wait(5000)
    cy.findAllByTestId('pet-action-menu').first().click()
    cy.findByTestId('show-profile-cy')
      .attribute('pet-uuid')
      .then((petUiid) => {
        console.log(petUiid)
        return petUiid
      })
      .then((petUiid) => {
        cy.visit(routes.adopterUrl + 'pet/' + petUiid)
      })
  },
  approveApplication(data = {}) {
    cy.visit(routes.rescueUrl)
    cy.get('input[name="search"]').click().type(data.name).type('{enter}')
    cy.wait(3000)
    cy.findAllByTestId('adoptions.pending.table.action').first().click()
    cy.wait(5000)
    cy.findAllByTestId('pet_details.applications_table.review').first().click()
    cy.wait(3000)
    cy.findAllByTestId('application.start_review.confirm').first().click()
    cy.wait(3000)
    cy.findAllByTestId('application.actions').first().click()
    cy.wait(3000)
    cy.findByTestId('application.approve').click()
    cy.wait(3000)
    cy.findByTestId('application.approve.confirm').click()
  },
}

export default commands
