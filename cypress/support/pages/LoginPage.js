'use strict'


export default class LoginPage {

  constructor() {
    this.userNameInput ='input[name="username"]'
    this.passwordInput ='input[name="password"]'
    this.submitButton = '.buttonL'
  }

  loggingIn(uname, password) {
    cy.intercept({method: 'GET', url: `/customer-domain-api/v1/customers`,}).as('customer')

    cy.highlightBorderElement(this.userNameInput,'magenta')
    cy.get(this.userNameInput).should('be.visible').type(uname)
    cy.highlightBorderElement(this.passwordInput,'magenta')
    cy.get(this.passwordInput).should('be.visible').type(password,{log:false})

    cy.highlightBorderElement(this.userNameInput,'transparent')
    cy.highlightBorderElement(this.passwordInput,'transparent')


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
        break;
    }
    cy.visit(Cypress.config('baseUrl'))
  }

  goToUrl(url) {
    cy.visit(`${Cypress.config('baseUrl')}${url}`)
  }
}
