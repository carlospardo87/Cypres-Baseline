/// <reference types="Cypress" />

import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

let timeNow = ''
//console.log('UNIX time:',now.getTime());


When('requesting Lists API', (productNum) => {
  cy.get('@getAuthToken').then((resToken) => {
    cy.getLists(resToken)
  })
})


When('Lists name {string} was created', (newListName) => {
  cy.get('@getAuthToken').then((resToken) => {
    timeNow = new Date().getTime();
    cy.getNewList(resToken, newListName+timeNow)
  })
})


When('{string} response should contain {string}', (apiName, newListName) => {
    cy.wait(5000)
    cy.get(`@get${apiName}`).then((response) => {
      console.log(response.body[0].listName)
      for (let i = 0; i < response.body.length; i++) {
        if (response.body[i].listName === newListName+timeNow) {
          console.log('New list was created')
          expect(response.body[i].listName, 'New list was created').to.equal(newListName+timeNow)
          return ''
        }
      }
      expect(newListName+timeNow, 'New list was not created').to.equal('')
      })
})
