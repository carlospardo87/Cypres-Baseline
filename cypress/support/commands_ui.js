import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import 'cypress-wait-until'

addMatchImageSnapshotCommand({
  customSnapshotsDir: './cypress/snapshots',
})

Cypress.Commands.add('',(locator, item, expectedText)=>{
  cy.get(locator)
    .eq(item)
    .should("contain", expectedText)
})


Cypress.Commands.add('shouldContainRegex', (locator, regex) => {
  cy
    .highlightBorderElement(locator, 'magenta')

cy.get(locator)
  .contains(regex)
  .should('exist')

  cy
    .highlightBorderElement(locator, 'transparent')
});

Cypress.Commands.add('elementShould', (locator,item, chainer, expectedText) => {
  cy
    .highlightBorderElement(locator, 'magenta')

  cy.get(locator)
    .eq(item)
    .should(chainer, expectedText)

  cy
    .highlightBorderElement(locator, 'transparent')
});

Cypress.Commands.add('shouldExist', (locator, chainer) => {
  cy
    .highlightBorderElement(locator, 'magenta')

  cy.get(locator)
    .should('exist')

  cy
    .highlightBorderElement(locator, 'transparent')
});

// -- Method to force click one element   --
Cypress.Commands.add('forceClick', {prevSubject: 'element'}, (subject, options) => {
  cy.wrap(subject).click({force: true})
});

// -- Method to force click multiple elements--
Cypress.Commands.add('forceMultipleClick', {prevSubject: 'element'}, (subject, options) => {
  cy.wrap(subject).click({multiple: true})
});

// -- Method to visit URL and wait for server response --
Cypress.Commands.add("navigateTo", (methodRequest, urlToIntercept, alias, url, statusCode) => {
  cy.intercept({
    method: methodRequest,
    url: urlToIntercept,
  }).as(alias)

  cy
    .visit(url)

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq', statusCode)
})

// -- Method to click an element and wait for server response --
Cypress.Commands.add("clickElement", (methodRequest, urlToIntercept, alias, elementToClick, statusCode) => {
  cy.intercept({
    method: methodRequest,
    url:urlToIntercept,
  }).as(alias)

  cy
    .highlightBorderElement(elementToClick, 'magenta')

  cy
    .get(elementToClick)
    .click()

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)

  cy
    .highlightBorderElement(elementToClick, 'transparent')
})

// -- Method to click an element if contains and wait for server response --
Cypress.Commands.add("clickElementIfContain", (methodRequest, urlToIntercept, alias, elementContent, statusCode) => {
  cy.intercept({
    method: methodRequest,
    url:urlToIntercept,
  }).as(alias)

  cy
    .highlightBorderElement(elementContent, 'magenta')

  cy
    .contains(elementContent)
    .click()
  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)

  cy
    .highlightBorderElement(elementContent, 'transparent')
})

// -- Method to click an element if contains and wait for server response --
Cypress.Commands.add("interceptUrl", (methodRequest, urlToIntercept, alias, statusCode) => {
  cy.intercept({
    method: methodRequest,
    url:urlToIntercept,
  }).as(alias)

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)
})

Cypress.Commands.add('console', {prevSubject: true,}, (subject, method) => {
  method = method || 'log'
  // log the subject to the console
  console[method]('The subject is', subject)
  return subject
})

// let's make a custom command to read the values from the list
Cypress.Commands.add('grabList', (selector) => {
  const grabbedList = []
  cy.log(`grabList **${selector}**`)
  cy.get(selector)
    .each(($li) => {
      // let's not even parse anything
      grabbedList.push($li.text())
    })
    // yield the grabbed list using either wrap or then
    .then(() => grabbedList)
})


Cypress.Commands.add('disableSmoothScroll', () => {
  cy.document().then(document => {
    const node = document.createElement('style');
    node.innerHTML = 'html { scroll-behavior: inherit !important; }';
    document.body.appendChild(node);
  });
})


// -- Method to click an element if contains and wait for server response --
Cypress.Commands.add("navigateToProductStubbingPSResponseBody", (url,stubBody, alias) => {
  cy.intercept({
    method: 'POST',
    url: '/product-domain-api/v1/productsummary',
  },{
    body: stubBody
  }).as(alias)
 
  cy.visit(url)
  
  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',200)


})

// -- Method to click an element if contains and wait for server response --
Cypress.Commands.add("clickElementStubbingResponseByBody", (methodRequest, urlToIntercept, stubBody, alias, elementToClick, statusCode) => {
  cy.intercept({
    method: methodRequest,
    url:urlToIntercept
  },{
    body: stubBody
  }).as(alias)

  cy
    .highlightBorderElement(elementToClick, 'magenta')

  cy
    .get(elementToClick)
    .click()

  cy
    .wait(`@${alias}`)
    .its('response.statusCode')
    .should('eq',statusCode)

  cy
    .highlightBorderElement(elementToClick, 'transparent')
})


Cypress.Commands.add('swipeUp', (locator) => {
  cy.get(locator)
    .trigger('mousedown')
    .trigger('mousemove', {clientX: 100, clientY: 275})
    .trigger('mouseup', {force: true})
})


Cypress.Commands.add('highlightBorderElement', (locator, color) => {
  cy.get(locator, {log:false})
    .then($button => $button.css('border', `2px solid ${color}`))

  cy.wait(250,{log:false})
})


