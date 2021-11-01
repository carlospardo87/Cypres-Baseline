'use strict'


export default class ListDetailsPage {

  constructor(){
    this.array_descriptionCards = '.usf-product-card-desc-heading-txt'
    this.array_brandNames = '.usf-product-card-desc-body-txt'
    this.array_productNumber = '.usf-product-card-desc > :nth-child(3) > :nth-child(1)'
    this.array_packSize = '.usf-product-card-desc > :nth-child(3) > :nth-child(3)'
    this.array_priceContainer = '.native-input.sc-ion-input-md'
    this.array_prices = '.usf-product-card-price span'
    this.array_listGroupName = '.list-details-group-name'

    this.array_productCardImg = '.usf-product-card-img > img'
    this.icon_cartCountItems = '.icon-badge-wrapper > .badge-header'
    this.title_listDetailsPage = '.list-page-banner-info'
  }


  checkCardElements(array_element, regexMach) {
    cy.wait(5000)
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
  cy.reload()

    cy.wait(2000)

    cy.get(this.array_priceContainer).eq(0).type(priceValue,{delay:10})

    cy.wait(1000)

    cy.clickElement('.usf-product-card-img > img', 0)

    cy.wait(1000)
  }

  checkCartItems(expectedPrice) {
    cy.shouldElement(this.icon_cartCountItems, 0, 'contain.text', expectedPrice)
  }

  checkAscendingOrder() {
    cy.reload()

    let arr_group = ['Unassigned Group','Grp1','Grp2','Grp3']
    cy
      .get(this.array_listGroupName).its('length').then(arr_length=>{
      for (let i = 0; i < arr_length; i++) {
        cy.wait(500)
        cy
            .get(this.array_listGroupName).eq(i).scrollIntoView().should('exist')
        cy.wait(500)
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


    checkTotalPrice(totalProd) {

     cy.get('.usf-product-card-price span').first().invoke('text').then(itemPrice => {
       let _itemPrice =itemPrice.replace('$','').replace('CS', '')
       let _totalProd = (Number(_itemPrice) * Number(totalProd)).toFixed(2);
       cy.log('productPrice * totalPrice = '+_totalProd)

       cy.get('.order-info-row > span').eq(1).invoke('text').then(totalPrice => {
         let _totalPrice = Number(totalPrice.replace('$','')).toFixed(2);
         cy.log('orderTotal = '+_totalPrice)

         cy.xpath(`//span[.='$${_totalProd}']`).should('be.visible')
         expect(_totalProd).to.be.equal(_totalPrice, `Total price should be equal to expected for ${totalProd} products`)
       })
     })
    }

  checkTotalCases(totalCases) {
    cy.get('.order-cases-eaches span').eq(1).invoke('text').then(_totalCases => {
      expect(_totalCases).to.be.equal(totalCases, `Total cases should be equal to expected for ${totalCases} cases`)
    })

  }
}