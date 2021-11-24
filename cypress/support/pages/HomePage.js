'use strict'

export default class HomePage {

  constructor(){
    this.myListButton = '.extra-left-margin'
    this.btn_dropDownList = '.outlined-green-btn'
  }


  clickMyListButton() {
    cy.intercept({method: 'GET', url:'/list-domain-api/v1/*',}).as('allLists')
    cy.highlightBorderElement(this.myListButton, 'magenta')
    cy
      .get(this.myListButton)
      .click()

    cy.highlightBorderElement(this.myListButton, 'transparent')

    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('One of the specified object stores was not found')
      return false
    })
  }

  urlContain(endToEnd) {
    cy.url().should('include', endToEnd)
  }


  urlContainProductDetails(pageName) {

    switch (pageName) {
      case 'List Management':
        this.checkPartialUrlEnd('/lists/management/')
        break;
      case 'List Details':
        this.checkPartialUrlEnd('/lists/detail/')
        break;
      case 'Home Page':
        this.checkPartialUrl('/desktop/home')
        break;
      case 'My Orders':
        this.checkPartialUrl('/desktop/order/my-orders')
        break;
      case 'My Lists' || 'View All Lists':
        this.checkPartialUrl('/desktop/lists')
        break;
      case 'Browse Products':
        this.checkPartialUrl('/desktop/search/catalog')
        break;


    }
  }

  checkPartialUrl(partialUrl) {
    cy.url().then(fullUrl => {
      cy.log(fullUrl)
      expect(fullUrl).to.contain(partialUrl)

    })
  }

  checkPartialUrlEnd(partialUrl) {
    cy.url().then(fullUrl => {
      cy.log(fullUrl)
      let arr = fullUrl.split("/")

      let endPartUrl = arr[arr.length-1]
      cy.log(`${endPartUrl}`)

      expect(fullUrl).to.contain(partialUrl)

      //Validate end part of the URL contain proper text
      expect(endPartUrl).to.be.match(/^[A-Z_.-]+(\d{5,8})$/)
    })
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
      } else if(browserToPage === 'Management List') {
        cy.visit(`${Cypress.config('baseUrl')}desktop/lists/management/SL-1016246`)
      } else if(browserToPage === 'View All Lists') {
        cy.visit(`${Cypress.config('baseUrl')}desktop/lists`)
      } else if(browserToPage === 'Current Order') {
        cy.visit(`${Cypress.config('baseUrl')}/desktop/order`)
      }else if(browserToPage === 'Shop Products') {
        cy.visit(`${Cypress.config('baseUrl')}/desktop/search/catalog`);
      }
        cy.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('One of the specified object stores was not found')
          return false
        })
      }

  checkBannerCss() {
    cy
        .get('.list-page-banner')
        .should('have.css', 'background-image', 'url("https://ecomr4-sit.ama-nonprod.usfoods.com/list-banner.3b650be7eb471096df9e.png")')
  }


  checkEllipsisCss() {
    cy.shouldHaveAttribute('.list-page-options > .md','name','ellipsis-vertical')
  }



    selectNewCustomer(customerNumber) {
    cy.selectCustomer(this.btn_dropDownList, customerNumber)

      cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('One of the specified object stores was not found')
        return false
      })

    }

  checkBannerAndText(bannerText) {
    cy.highlightBorderElement('.home-banner', 'magenta')
    cy.get('.home-banner')
        .should('have.css', 'background-image', 'url("https://ecomr4-sit.ama-nonprod.usfoods.com/assets/images/home-banner-desktop.png")')
    cy.highlightBorderElement('.home-banner', 'transparent')

    cy.shouldElement('.home-banner-text > span', 0, 'have.text', bannerText)
  }

  checkOptionsCards(cardTitle) {
    cy.xpath(`//ion-card-header[contains(.,'${cardTitle}')]`).then($el=>{
        cy.highlightBorderElement($el, 'magenta')
        cy.wrap($el).should('be.visible')
        cy.highlightBorderElement($el, 'transparent')
      })
  }

  checkEndBanner() {
    cy.get('.home-shop-products').scrollIntoView().should('exist')
    cy.get('.home-shop-products')
        .should('have.css', 'background-image', 'url("https://ecomr4-sit.ama-nonprod.usfoods.com/assets/images/home-shop-prods-desktop.png")')
  }
}