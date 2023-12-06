import { homepage } from '../e2e/homepage_google/homepage_google'
import { result } from './results_google/results'


describe('template spec', () => {

  before(() => {
    cy.fixture('testData').then((data) => {
      globalThis.data = data
    })

  })

  it('should verify the term search', () => {

    cy.visit('/')

    cy.get(homepage.searchButton).type(data.term)

    cy.get(homepage.searchButton).type('{enter}')

    cy.get(result.list)
      .eq(0)
      .should('have.text', data.expected_result)

  })
})