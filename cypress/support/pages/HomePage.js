'use strict'

export default class HomePage {

  constructor(){
    this.myListButton = '.extraLeftMargin'
    this.loadingSpinner = '.loading-spinner-content'
  }


  clickMyListButton() {
    cy.intercept({method: 'GET', url:'/list-domain-api/v1/*',}).as('allLists')
    cy.highlightBorderElement(this.myListButton, 'magenta')
    cy
      .get(this.myListButton)
      .click()

    cy.highlightBorderElement(this.myListButton, 'transparent')
  }

  urlContain(endToEnd) {
    cy.url().should('include', endToEnd)
  }


  urlContainProductDetails(pageName) {

    let partialUrl = ''

    switch (pageName) {
      case 'List Management':
        partialUrl = '/lists/management/';
        break;
      case 'List Deatils':
        partialUrl = '/lists/detail/';
        break;
    }

    cy.url().then(fullUrl => {
      cy.log(fullUrl)
      let arr = fullUrl.split("/")

      let endPartUrl = arr[arr.length-1]
      cy.log(`${endPartUrl}`)

      expect(fullUrl).to.contain(partialUrl)
      expect(endPartUrl).to.be.match(/^[A-Z_.-]+(\d{5,8})$/)


    })
  }

  clickMyListButtonAndStubResponseItems(pathFixture) {

    cy.intercept('GET', '/list-domain-api/v1/lists?watermark*', {statusCode: 200, fixture: pathFixture}).as("allListMocked")
    cy
      .get(this.myListButton)
      .click()

    cy.wait(['@allListMocked'])
  }

  clickMyListButtonAndStubResponse() {
    cy.clickElementStubbingResponseByBody(
      'GET',
      '/list-domain-api/v1/*',
      [],
      'allListEmptyMocked',
      this.myListButton,
      200
    )
  }

    navigateTo(browserToPage) {
      if (browserToPage === 'Detail List') {
        cy.visit(`${Cypress.config('baseUrl')}desktop/lists/detail/SL-1016246`)
      } else {
        cy.visit(`${Cypress.config('baseUrl')}desktop/lists/management/SL-1016246`)
      }

    }

  checkBannerCss() {
    cy
        .get('.list-page-banner')
        .should('have.css', 'background-image', 'url("https://ecomr4-sit.usfoods-a0-poc1.com/list-banner.3b650be7eb471096df9e.png")')
  }
}