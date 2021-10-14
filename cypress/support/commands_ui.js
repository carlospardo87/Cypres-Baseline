//import {addMatchImageSnapshotCommand} from 'cypress-image-snapshot/command'
import 'cypress-wait-until'

//addMatchImageSnapshotCommand({customSnapshotsDir: './cypress/snapshots',})

Cypress.Commands.add('shouldMatchRegex', (locator, item, regex) => {
    cy.get(locator).eq(item).then($elementCss => {
        cy.highlightBorderElement($elementCss, 'magenta')
        expect($elementCss.text()).to.be.match(regex)
        cy.highlightBorderElement($elementCss, 'transparent')
    })
});

Cypress.Commands.add('shouldElement', (locator, item, chainer, expectedText) => {
    cy.get(locator).eq(item).then($elementCss => {
        cy.highlightBorderElement($elementCss, 'magenta')
        cy.wrap($elementCss, {log: false})
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
    cy.intercept({method: methodRequest, url: urlToIntercept,}).as(alias)
    cy.highlightBorderElement(elementToClick, 'magenta')
    cy
        .get(elementToClick)
        .click()

    cy
        .wait(`@${alias}`)
        .its('response.statusCode')
        .should('eq', statusCode)

    cy.highlightBorderElement(elementToClick, 'transparent')
})


Cypress.Commands.add("interceptUrl", (methodRequest, urlToIntercept, alias, statusCode) => {
    cy.intercept({method: methodRequest, url: urlToIntercept,}).as(alias)
    cy
        .wait(`@${alias}`)
        .its('response.statusCode')
        .should('eq', statusCode)
})

Cypress.Commands.add("clickElementStubbingResponseByBody", (methodRequest, urlToIntercept, stubBody, alias, elementToClick, statusCode) => {
    cy.intercept({method: methodRequest, url: urlToIntercept}, {body: stubBody}).as(alias)

    cy.highlightBorderElement(elementToClick, 'magenta')

    cy.get(elementToClick).click()

    cy
        .wait(`@${alias}`)
        .its('response.statusCode')
        .should('eq', statusCode)

    cy.highlightBorderElement(elementToClick, 'transparent')
})

Cypress.Commands.add('highlightBorderElement', (locator, color) => {
    cy.get(locator, {log: false})
        .then($element => $element.css('border', `2px solid ${color}`))

    cy.wait(50, {log: false})
})

Cypress.Commands.add('shouldHaveAttribute', (locator, attrName, attrValue) => {
    cy
        .get(locator)
        .each(($el) => {
            cy.highlightBorderElement($el, 'magenta')
            expect($el).to.have.attr(attrName, attrValue)
            cy.highlightBorderElement($el, 'transparent')
        });
})

Cypress.Commands.add('shouldAppearLoadingSpinner', (locator, popUpInfo) => {
    cy.highlightBorderElement(locator, 'magenta')
    cy.get(locator)
        .should('be.visible')
        .should('have.text', popUpInfo)
    cy.highlightBorderElement(locator, 'transparent')
});


/*Cypress.Commands.add('highlightBorder', {prevSubject: true}, (subject, color) => {

  cy.wrap(subject).then($element => $element.css('border', `2px solid ${color}`))

  cy.wait(50,{log:false})
})*/

Cypress.Commands.add('clickElement', (locator, item) => {
    cy.get(locator).eq(item).then($elementCss => {
        cy.highlightBorderElement($elementCss, 'magenta')
        cy.wrap($elementCss, {log: false})
            .should('be.visible')
            .click()
        cy.highlightBorderElement($elementCss, 'transparent')
    })

})

Cypress.Commands.add('clickElementForce', (locator, item) => {
    cy.get(locator).eq(item).then($elementCss => {
        cy.highlightBorderElement($elementCss, 'magenta')
        cy.wrap($elementCss, {log: false})
            .should('be.visible')
            .click({force: true})
        cy.highlightBorderElement($elementCss, 'transparent')
    })

})


Cypress.Commands.add("clickByName", (tag, elementName) => {
    cy.xpath(`//${tag}[.='${elementName}']`).then($el => {
        cy.highlightBorderElement($el, 'magenta')
        cy.wrap($el, {log: false})
            .should('be.visible')
            .click()
        cy.highlightBorderElement($el, 'transparent')

    })
})


// cypress/support/commands.js
/**
 * Conditionally run tests based on the result of a selector. Using this is a (`before`|`beforEach`) hook
 * will skip the entire suite if it doesn't exist on the page by default. In an `it` block it will just skip the current test.
 * To disable this behaviour pass in false for the `skip` parameter.
 * @param {object} param The selector to see if the test subject is on the page.
 * @param {string} param.selector The selector to see if the test subject is on the page.
 * @param {string=} param.variableName The name of the variable to be added to `this` context.
 * @param {boolean=} param.skip Whether or not to call the `this.skip` method in the current block if its not on the page.
 * @returns {Cypress.Chainable<any>} The result of a cy.get() query using the provided selector.
 */
function getIfExists({selector, variableName, skip = true}) {
    // Access the document object.
    cy.document().then(($document) => {
        // Perform a search query with the selector.
        const documentResult = $document.querySelectorAll(selector)

        // If there is a result, we want to use Cypress.get() to store the cypress result instead of the vanilla js result.
        if (documentResult.length) {
            // Store it as this.<variable> and return the result. It will be accessiblein siblings and descendants.
            // If we want to store the result as a variable.
            if (variableName) {
                // Store it as this.<variable> and return the result. It will be accessiblein siblings and descendants, and via alias in Cypress commands (i.e. cy.get('@variableName')).
                return cy.get(selector)
                    .should('exist')
                    .as(variableName)
            } else {
                return cy.get(selector)
                    .should('exist')
            }
            // If there are no results, end the test early.
        } else if (!documentResult.length && skip) {
            // Log the reason.
            cy.log('Test subject not in DOM, skipping this test.')
                .then(() => {
                    // End the test.
                    this.skip()
                })
        } else if (!documentResult.length && !skip) {
            return cy.get(selector)
        }
    })
}

Cypress.Commands.add('getIfExists', getIfExists)


Cypress.Commands.add("removeDomElement", (selector) => {
    cy.document({log: false}).then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        if (documentResult.length) {
            cy.get(selector).then($el => {
                $el.remove()
                cy.log('Element removed in the DOM')
            })
        }
    })
})


Cypress.Commands.add("selectCustomer", (locator, customerInfo) => {

    // Waiting API customer variable obtained in login step has status code 200
    cy.wait('@customer')
        .its('response.statusCode')
        .should('eq', 200)

    cy.get(locator).should('have.attr','class','outlined-green-btn md button button-block button-small button-round button-outline ion-activatable ion-focusable hydrated')

    cy.get(locator).then($el => {
        if (!$el.text().includes(customerInfo)) {


            // Clicking customer dropdown
            cy.clickElement(locator, 0)
            cy.wait(1000)

            // Intercepting and saving customer API when a new customer is chosen
            cy.intercept({method: 'GET', url: `/customer-domain-api/v1/customers`})
                .as('customerChange')

            // Clicking dropdown option by any string on the name, could be a number
            cy.xpath(`//ion-label[contains(.,'${customerInfo}')]`)
                .click({force: true})

            // Waiting new customer API intercepted has the status code 200
            cy.wait('@customerChange')
                .its('response.statusCode')
                .should('eq', 200)

        }
    })

})


