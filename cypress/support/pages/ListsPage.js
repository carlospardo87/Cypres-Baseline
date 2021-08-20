'use strict'


export default class ListsPage {
  constructor() {

    this.listsTitle = '.viewAllLists'
    this.btn_createOrder = '.headerRowRight > ion-button'
    this.btn_myLists = '.extraLeftMargin'
    this.icon_searchBar = '.listHeaderRight .searchbar-search-icon'
    this.icon_dpCheckMarkCircle = '.whiteIcon'
    this.searchBar = '.listSearch'
    this.btn_createNewList = '.createNewList'
    this.btn_dropDownList = '.outlinedGreenBtn'

    this.array_dropDownElementsList = '.popoverHeaderCustomerScroll ion-item' // List Items Dropdown
    this.array_section_items = 'ion-item' // List Items Section
    this.array_section_list = 'ion-list-header.md'  //List Section Title

    this.loadingSpinner = '.loading-spinner-content'
    this.editListPopup = '.list-ios'
    this.array_editListPoppup = '.ios.list-ios.hydrated > ion-item'
    this.array_ellipsisIcon = "ion-icon[name='ellipsis-vertical']"
  }

  /**
   * Method checks if customer exist inside the dropdown
   * @param customerInf  Customer Information
   */
  checkIfCustomerExistOnDpList(customerInf) {
    const grabbedList = []

    cy.highlightBorderElement(this.btn_dropDownList, 'magenta')

    cy.get(this.btn_dropDownList, {timeout: 20000})
      .should('be.visible')
      .and('contain', customerInf)
      .click()

    cy
      .get(this.array_dropDownElementsList)
      .each(($li) => {
        grabbedList.push($li.text())
      })
      .then(($li) => {
        for (let i = 0; i < grabbedList.length; i++) {
          if (grabbedList[i].includes(customerInf)) {
            expect(grabbedList[i]).to.includes(customerInf)
            cy.highlightBorderElement(this.btn_dropDownList, 'transparent')
            return
          }
        }
        throw new Error(`Customer drop down items does not contain the number: ${customerInf}`)
      })

  };

  elementIsVisible(locator) {
    cy.shouldElement(locator, 0, 'be.visible')
  }

  /**
   * Method checks header title in each section
   * @param userType   Internal or External
   */
  checkSectionHeader(userType) {
    let indexSections = 0
    let arr_InternalUserSection = ['Public', 'Internal', 'Private', 'Managed by US Foods']
    let arr_ExternalUserSection = ['My Shopping Lists', 'Managed by US Foods']

    if (userType.includes('Internal')) {
      cy.log(`Checking section header - ${userType} user`)
      arr_InternalUserSection.forEach(el => {
        cy.shouldElement(this.array_section_list, indexSections, 'contain', el)
        indexSections++
      });
    } else {
      cy.log(`Checking section header - ${userType} user`)
      arr_ExternalUserSection.forEach(el => {
        cy.shouldElement(this.array_section_list, indexSections, 'contain', el)
        indexSections++
      });
    }
  }

  checkColumnDescriptions() {
    let array_columnDescription = ['List Name', 'Last Updated By', 'Products'] //, 'Discontinued'
    cy.get(this.array_section_list).its('length').then(arr_length => {
      for (let i = 1; i <= arr_length; i++) {
        for (let j = 0; j < array_columnDescription.length; j++) {
          cy.xpath(`//app-list-section[${i}]//div[.='${array_columnDescription[j]}']`)
            .should('contain.text', array_columnDescription[j])
        }
      }
    })

  }

  elementHaveText(locator, textExpected) {

    cy.shouldElement(locator, 0, 'have.text', textExpected)
  }

  checkNoListMessage(expectedText) {

    cy
      .highlightBorderElement(this.array_section_items, 'magenta')
    cy
      .get(this.array_section_items)
      .filter('.item-card')
      .should('contain', expectedText)

    cy
      .highlightBorderElement(this.array_section_items, 'transparent')
  }

  checkListInformation() {
    let array_listItemsCss = ['.list-name', '.last-updated-by', '.products']

    cy.get(this.array_section_list).its('length').then(arr_length => {
      for (let i = 0; i < arr_length; i++) {
        for (let j = 0; j < array_listItemsCss.length; j++) {
          cy.shouldMatchRegex(`.list-md > .item-card > ${array_listItemsCss[j]}`, i, /\w+/)
        }
      }
    })
  }

  clickCustomerListAndStubResponse(listToClick) {

    cy.intercept('POST', '/product-domain-api/v1/productsummary', {
       fixture: 'listDetailsPage/mockProductSummary.json'
     }).as('listDetailsMocked')

     cy.intercept('POST', '/price-domain-api/v1/pricing', {
       fixture: 'listDetailsPage/mockPricing.json'
     }).as('priceMocked')

    cy.intercept('GET', '/list-domain-api/v1/listGroups', {
      fixture: 'listDetailsPage/mockListGroups.json'
    }).as('listGroupMocked')

    cy
      .contains(listToClick)
      .click()

    cy.wait(['@listGroupMocked'])  //'@listDetailsMocked', '@priceMocked',
  }

  clickCustomerList(listToClick) {
    cy.intercept('GET', '/list-domain-api/v1/lists?watermark*')
      .as('detailsPage')

    if(listToClick === 'Order Guide') {
      cy.scrollTo('bottom', { ensureScrollable: false, duration:3000, easing:'linear'})
      cy.get('.list-name').last()
        .click()
    }else{
      cy.contains(listToClick)
        .click();
    }
  }

  checkProductItemsInformation(listItemCount) {
    let iter = 0
    let listItemCount_array = JSON.parse('[' + listItemCount + ']');
    listItemCount_array.forEach(el => {
      cy.shouldElement('.item-card > .products', iter, 'contain.text', el)
      iter++
    })
  }

  checkLoadingSpinnerLp(spinnerText) {

    cy.shouldAppearLoadingSpinner(this.loadingSpinner, spinnerText)

      cy
        .wait('@allLists')
        .its('response.statusCode')
        .should('eq', 200);
  }

  clickAndSortMenuOption(sortMenuOption) {
      switch (sortMenuOption) {
        case 'List Name':
          this.clickMenuList('List Name', '.list-name', 'ECypressTest', 'ACypressTest')
          break
        case 'Last Updated By':
          this.clickMenuListDbl('Last Updated By', '.last-updated-by', 'E TMID2', 'A TMID2')
          break
        case 'Products':
          this.clickMenuList('Products', '.products', '40', '0')
          break
        case 'Discontinued':
          this.clickMenuListDbl('Discontinued', '.discontinued-products', '1', '5')
          break
    }
  }

  clickMenuList(listName, locList, sortDesc, sortAsc) {
    cy.xpath(`//app-list-section[1]//div[contains(.,'${listName}')]`).then($el => {

      cy.highlightBorderElement($el, 'magenta')
      cy.wrap($el).click({force: true})
      cy.highlightBorderElement($el, 'transparent')
      cy.shouldElement(locList, 0, 'contain.text', sortDesc)

      cy.highlightBorderElement($el, 'magenta')
      cy.wrap($el).click({force: true})
      cy.highlightBorderElement($el, 'transparent')
      cy.shouldElement(locList, 0, 'contain.text', sortAsc)
    })
  }

  clickMenuListDbl(listName, locList, sortDesc, sortAsc) {
     //cy.xpath(`//app-list-section[1]//div[.='${listName}']`).then($el => {
      cy.xpath(`//app-list-section[1]//div[contains(.,'${listName}')]`).then($el => {

      cy.highlightBorderElement($el, 'magenta')
      cy.wrap($el).dblclick({force: true})
      cy.highlightBorderElement($el, 'transparent')
      cy.shouldElement(locList, 0, 'contain.text', sortDesc)

      cy.highlightBorderElement($el, 'magenta')
      cy.wrap($el).click({force: true})
      cy.highlightBorderElement($el, 'transparent')
      cy.shouldElement(locList, 0, 'contain.text', sortAsc)
    })
  }

  checkEditListPopup(arrayItems) {
    let arrItem = arrayItems.split(',')
    for (let i = 0; i < arrItem.length; i++) {
      cy.shouldElement(this.array_editListPoppup, i,'have.text', arrItem[i] )
    }
  }

  clickIconEllipsis(array_ellipsisIcon) {
    cy.clickElement(array_ellipsisIcon, 0)
  }

  clickIconEllipsisByListName() {
    cy.get(this.array_ellipsisIcon).eq(0).click()
}
  clickOptionEditList(optionName) {
    cy.intercept('GET', '/list-domain-api/v1/lists?watermark*')
      .as('detailsPage')

    cy.xpath(`//ion-label[.='${optionName}']`).click()
  }
}