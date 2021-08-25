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


  urlContainProductDetails(listName) {
    cy.wait('@detailsPage').then((interception) => {

      // this if will be removed in the future, the refactor will be created once get available data to test this flow
      // Currently the list in Managed by US Foods does not reply their name in product detail
      // for this reason include this if to handle this verification
      if (listName === 'Order Guide') {
        listName = ''
      }

      for (let i = 0; i < interception.response.body.length; i++) {
        if (interception.response.body[i].listName === (listName)) {

          let listTypeId = interception.response.body[i].listKey.listTypeId
          let listId = interception.response.body[i].listKey.listId

          cy.url().should('include', `${listTypeId}-${listId}`)
          return
        }
      }
      throw new Error(`There was an error :${listName} was not found into the response body ${interception.response.body}`)
    })
  }

  clickMyListButtonAndStubResponseItems(pathFixture) {

    cy.intercept('GET', '/list-domain-api/v1/list*', {
      statusCode: 200,
      fixture: pathFixture
    }).as("allListMocked")
    cy
      .get(this.myListButton)
      .click()

    cy.wait('@allListMocked')
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
}