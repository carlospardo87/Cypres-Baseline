
import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import 'cypress-wait-until'

addMatchImageSnapshotCommand({customSnapshotsDir: './cypress/snapshots',})

Cypress.Commands.add('shouldMatchRegex', (locator, item, regex) => {
  cy.get(locator).eq(item).then($elementCss => {
    cy.highlightBorderElement($elementCss, 'magenta')
    expect($elementCss.text()).to.be.match(regex)
    cy.highlightBorderElement($elementCss, 'transparent')
  })
});

Cypress.Commands.add('shouldElement', (locator,item, chainer, expectedText) => {
  cy.get(locator).eq(item).then($elementCss => {
  cy.highlightBorderElement($elementCss, 'magenta')
    cy.wrap($elementCss,{log:false})
    .should(chainer, expectedText)
  cy.highlightBorderElement($elementCss, 'transparent')
  })
});

Cypress.Commands.add("navigateTo", (methodRequest, urlToIntercept, alias, url, statusCode) => {
  cy.intercept({method: methodRequest, url: urlToIntercept,}).as(alias)
  cy
    .visit(url)
  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq', statusCode)
})

Cypress.Commands.add("clickElementInterceptResponse", (methodRequest, urlToIntercept, alias, elementToClick, statusCode) => {
  cy.intercept({method: methodRequest, url:urlToIntercept,}).as(alias)
  cy.highlightBorderElement(elementToClick, 'magenta')
  cy
    .get(elementToClick)
    .click()

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)

  cy.highlightBorderElement(elementToClick, 'transparent')
})

Cypress.Commands.add("clickElementIfContain", (methodRequest, urlToIntercept, alias, elementContent, statusCode) => {
  cy.intercept({method: methodRequest, url:urlToIntercept,}).as(alias)
  cy
    .contains(elementContent)
    .click()
  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)
})

Cypress.Commands.add("interceptUrl", (methodRequest, urlToIntercept, alias, statusCode) => {
  cy.intercept({method: methodRequest, url:urlToIntercept,}).as(alias)
  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)
})

Cypress.Commands.add("clickElementStubbingResponseByBody", (methodRequest, urlToIntercept, stubBody, alias, elementToClick, statusCode) => {
  cy.intercept({method: methodRequest, url:urlToIntercept},{body: stubBody}).as(alias)

  cy.highlightBorderElement(elementToClick, 'magenta')

  cy.get(elementToClick).click()

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)

  cy.highlightBorderElement(elementToClick, 'transparent')
})

Cypress.Commands.add('highlightBorderElement', (locator, color) => {
  cy.get(locator, {log:false})
    .then($element => $element.css('border', `2px solid ${color}`))

  cy.wait(50,{log:false})
})

Cypress.Commands.add('shouldHaveAttribute',(locator, attrName, attrValue)  => {
  cy
    .get(locator)
    .each(($el) => {
      cy.highlightBorderElement($el, 'magenta')
      expect($el).to.have.attr(attrName, attrValue)
      cy.highlightBorderElement($el, 'transparent')
    });
})

Cypress.Commands.add('shouldAppearLoadingSpinner',(locator, popUpInfo) =>{
    cy.highlightBorderElement(locator, 'magenta')
    cy.get(locator)
      .should('be.visible')
      .should('have.text',popUpInfo)
    cy.highlightBorderElement(locator, 'transparent')
});


/*Cypress.Commands.add('highlightBorder', {prevSubject: true}, (subject, color) => {

  cy.wrap(subject).then($element => $element.css('border', `2px solid ${color}`))

  cy.wait(50,{log:false})
})*/

Cypress.Commands.add('clickElement', (locator,item) => {
  cy.get(locator).eq(item).then($elementCss => {
    cy.highlightBorderElement($elementCss, 'magenta')
    cy.wrap($elementCss,{log:false})
      .should('be.visible')
      .click()
    cy.highlightBorderElement($elementCss, 'transparent')
  })
});

