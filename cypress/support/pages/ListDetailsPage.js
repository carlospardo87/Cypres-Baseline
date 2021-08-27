'use strict'


export default class ListDetailsPage {

  constructor(){
    this.array_descriptionCards = '.usf-product-card-desc-heading-txt'
    this.array_brandNames = '.usf-product-card-desc-body-txt'
    this.array_brandCards = '.usf-product-card-desc > :nth-child(1)'
    this.array_productNumber = '.usf-product-card-desc > :nth-child(3) > :nth-child(1)'
    this.array_packSize = '.usf-product-card-desc > :nth-child(3) > :nth-child(3)'
    this.array_priceContainer = '.native-input.sc-ion-input-md'
    this.array_prices = '.usf-product-card-price span'
    this.array_listGroupName = '.item > .list-details-page-group-name'

    this.array_productCardImg = '.usf-product-card-img > img'
    this.icon_cart = '.icon-badge-wrapper > .headerIcon'
    this.icon_cartCountItems = '.icon-badge-wrapper > .badgeheader'
    this.title_listDetailsPage = '.list-page-header'
    this.loadingSpinner = '.loading-spinner-content'
  }


  checkCardElements(array_element, regexMach) {
    cy.get(array_element).should('be.visible').its('length')
      .then(arrLength => {
      for (let i = 0; i < arrLength ; i++) {
        cy.shouldMatchRegex(array_element, i, regexMach)
      }
    });
  }

  getPackSizeContains(array_element, packSizeList) {
    let arr = packSizeList.split(',');
    let i = 0

    cy
      .get(array_element)
      .each(($li) => {

        cy
          .highlightBorderElement($li, 'magenta')

        while (!($li.text().includes(arr[i])) && i < arr.length) {
          i++
        }
        if (i === arr.length) {
          throw new Error('Element does not contains text or was not displayed')
        }
        expect($li.text()).to.be.include(arr[i])
        i = 0

        cy
          .highlightBorderElement($li, 'transparent');
      })
  }

  checkVisibilityOf(locator) {
    cy
      .get(locator)
      .each(($el, i) => {
        cy.highlightBorderElement($el, 'magenta')
        $el.is(':visible')
        assert.isOk(`Quantity box pricing ${i} is visible`);
        cy.highlightBorderElement($el, 'transparent')
      });
  }

  shouldHaveAttribute(locator, attrName, attrValue) {
    cy.reload()
    cy.shouldHaveAttribute(locator,attrName, attrValue )
  }

  checkCardPrices(regexMach) {
    let iter = 0
    cy
      .get(this.array_prices).invoke('text').then(priceInfo=>{
      while (priceInfo.includes('loading..CS') && iter<10) {
        cy.wait(6000)
        iter++
      }
      if(iter>10) throw new Error('Price has been loading for 60 seconds ...')
    })
    cy
      .get(this.array_prices).its('length').then(arr_length=>{
      for (let i = 0; i < arr_length; i++) {
        cy.shouldMatchRegex(this.array_prices, i, regexMach)
      }
    })
  }

  checkProductNumbers(regexMach) {
    cy
      .get(this.array_productNumber).its('length').then(arr_length=>{
      for (let i = 0; i < arr_length; i++) {
        cy.shouldMatchRegex(this.array_productNumber, i, regexMach)
      }
    })
  }

  fillInputItems(priceValue) {

  // cy.highlightBorderElement(cy.get(this.array_priceContainer).eq(0), 'magenta')
    cy.get(this.array_priceContainer).eq(0).type(priceValue)
   // cy.highlightBorderElement(cy.get(this.array_priceContainer).eq(0), 'transparent')
  }

  checkCartItems(expectedPrice) {
    cy.shouldElement(this.icon_cartCountItems, 0, 'contain.text', expectedPrice)
  }

  checkAscendingOrder() {
    cy.reload()

    let arr_group = ['GroupA','GroupB','GroupC']
    cy
      .get(this.array_listGroupName).its('length').then(arr_length=>{
      for (let i = 0; i < arr_length; i++) {
        cy.shouldElement(this.array_listGroupName, i, 'contain.text', `${arr_group[i]}`)
      }
    })
  }

  clickProductCard() {

    cy.get(this.array_productNumber).eq(0).invoke('text').then(text => {
      cy.log(text);
    }).as('productNumber')

    cy.get(this.array_productCardImg).eq(0)
      .as('cardImg')

    cy
      .clickElementForce('@cardImg',0)
  }

  checkUrlContain() {
    cy.get('@productNumber').then((prodNumb) => {
      let pdNumber = prodNumb.toString().replace("#", "");
      cy.url().should('include', `/products/${pdNumber}`)
    })
  }

  checkListDetailsPageTitle(headerTitle) {
    // Removing overlapping element
    cy.removeDomElement('#ion-overlay-1')


    cy.highlightBorderElement(this.title_listDetailsPage, 'magenta')
    cy
      .contains(this.title_listDetailsPage,headerTitle, {matchCase:false})

    cy.highlightBorderElement(this.title_listDetailsPage, 'transparent')
  }

}