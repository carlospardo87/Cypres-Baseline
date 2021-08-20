'use strict'


export default class LoginPage {

  constructor() {
    this.userNameInput ='input[name="username"]'
    this.passwordInput ='input[name="password"]'
    this.submitButton = '.buttonL'
  }

  loggingIn(uname, password) {
    cy.highlightBorderElement(this.userNameInput,'magenta')
    cy.get(this.userNameInput).should('be.visible').type(uname)
    cy.highlightBorderElement(this.passwordInput,'magenta')
    cy.get(this.passwordInput).should('be.visible').type(password,{log:false})

    cy.highlightBorderElement(this.userNameInput,'transparent')
    cy.highlightBorderElement(this.passwordInput,'transparent')

    /*cy.intercept('GET', '/customer-domain-api/v1/customers', {
      fixture: 'customers/customers.json'
    }).as('customer')

    cy.intercept('PUT', '/order-domain-api/v1/orders', {
      fixture: 'customers/orders.json'
    }).as('orders')


    cy
      .get(this.submitButton)
      .click()

    cy
      .wait(10000)
*/

    cy.clickElementInterceptResponse(
       'POST',
       '/auth-api/v1/oauth/token',
       'authToken',
       this.submitButton,
       200)
  }

  navigateWithViewPort(device) {
    switch (device) {
      case 'browser':
        cy.viewport(1440, 900)
        //cy.viewport('iphone-xr')
        break;
    }
    cy.visit(Cypress.config('baseUrl'))
  }

  goToUrl(url) {
    cy.visit(`${Cypress.config('baseUrl')}${url}`)
  }
}
