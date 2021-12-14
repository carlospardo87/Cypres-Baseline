'use strict'


export default class ListsPage {
  constructor() {

    this.listsTitle = '.view-all-lists'
    this.btn_createOrder = ".header-right-section .full-green-btn"
    this.icon_searchBar = '.list-search .searchbar-search-icon'
    this.icon_dpCheckMarkCircle = '.whiteIcon'
    this.searchBar = '.searchbar-input[placeholder="Search"]'
    this.btn_createNewList = '.create-new-list'
    this.btn_dropDownList = '.header-left-section .outlined-green-btn'

    this.array_dropDownElementsList = '.popover-header-customer-scroll ion-item' // List Items Dropdown
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

    cy.get(this.btn_dropDownList, {timeout: 20000}).last()
      .should('be.visible')
      .and('contain', customerInf)
      .click({force: true})

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
    let array_columnDescription = ['List Name', 'Last Updated By', 'Products', 'Discontinued'] //, 'Discontinued'
    cy.get(this.array_section_list).its('length').then(arr_length => {
      for (let i = 1; i <= arr_length; i++) {
        cy.log('== Section # ==> '+i)
        for (let j = 0; j < array_columnDescription.length; j++) {
          cy.log(`--- ${array_columnDescription[j]} --`)
          cy.xpath(`//app-list-section[${i}]//div[contains(.,'${array_columnDescription[j]}')]`)
            .should('contain.text', array_columnDescription[j])
        }
      }
    })

  }

  elementHaveText(locator, textExpected) {

    cy.shouldElement(locator, 0, 'have.text', textExpected)
  }

  checkNoListMessage(expectedText) {

    cy.get('.list-md > .item-card').its('length').then(arrLength => {
      cy.get('.list-md > .item-card').then($el => {
        // Starting looking after the second list
      for (let i = 2; i < arrLength; i++) {
        cy.highlightBorderElement($el, 'magenta')
        cy.wrap($el).eq(i).should('contain', expectedText)
        cy.highlightBorderElement($el, 'transparent')
      }
    })
  })
  }

  checkListInformation() {
    let array_listItemsCss = ['.list-name', '.last-updated-by', '.products'] //, '.discontinued-products'

        for (let j = 0; j < array_listItemsCss.length; j++) {

          cy.shouldMatchRegex(`${array_listItemsCss[j]}`, 0, /\w+/)
        }
  }


  clickCustomerList(listName) {

    cy.intercept({method: 'GET', url:'/list-domain-api/v1/list*',}).as('editList')

    cy.get('.item-card.item').each($el => {
      if ($el.text().includes(listName)) {
        cy.wrap($el).scrollIntoView().should('exist')
        cy.wrap($el).click({force: true})
      }
    });
  }

  checkProductItemsInformation(listItemCount) {
    let iter = 0
    let listItemCount_array = JSON.parse('[' + listItemCount + ']');
    listItemCount_array.forEach(el => {
      cy.shouldElement('.item-card > .products', iter, 'contain.text', el)
      iter++
    })
  }

  checkLoadingSpinnerIfExist(spinnerText) {
    this.ifExists('.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md', 5, spinnerText)
  }


  clickAndSortMenuOption(sortMenuOption) {
      switch (sortMenuOption) {
        case 'List Name':
          cy.clickElementForce('.list-sorting-option', 0)
          break
        case 'Last Updated By':
          cy.clickElementForce('.list-sorting-option', 1)
          break
        case 'Products':
          cy.clickElementForce('.list-sorting-option', 2)
          break
        case 'Discontinued':
          cy.clickElementForce('.list-sorting-option', 3)
          break
    }
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
    cy.get(this.array_ellipsisIcon).eq(0).click({force: true})
}
  clickOptionEditList(optionName) {
    cy.intercept('GET', '/list-domain-api/v1/lists?watermark*')
      .as('detailsPage')

    cy.xpath(`//ion-label[.='${optionName}']`).click()
  }


  removeSpinner() {
    cy.get('.modal-wrapper.ion-overlay-wrapper.sc-ion-modal-md').then($el => {
      $el.remove()
    })
    cy.get('.sc-ion-modal-md.md.backdrop-no-tappable.hydrated').then($el => {
      $el.remove()
    })
  }

  waitSpinnerFinish(locator) {
    cy.highlightBorderElement(locator, 'magenta')
      cy.get(locator, {timeout:60000})
          .should('not.exist')
    }



  ifExists(selector, iter, spinnerText) {
    let i = 0
    let status = false

    for (i ; i < iter; i++) {
      cy.document({log:false}).then(($document) => {
        const documentResult = $document.querySelectorAll(selector)
        if (documentResult.length) {
          cy.shouldAppearLoadingSpinner(this.loadingSpinner, spinnerText);
          //this.removeSpinner();
          this.waitSpinnerFinish(this.loadingSpinner)
          //return ''
          status = true
        } else {
          cy.wait(250,{log:false})
        }
      })
    }
    (status = true) ? cy.log('=======  Loading Spinner was showed =======') : "cy.log('=======  Loading Spinner was not showed =======')"
  }


  clickOnEditList(listName, optionName) {
    cy.intercept({method: 'GET', url:'/list-domain-api/v1/list*',}).as('editList')

    cy.get('.item-card.item').each($el => {

      if ($el.text().includes(listName)) {

        cy.wrap($el).scrollIntoView().should('exist')
        cy.wrap($el).find('ion-icon').click({force: true})
        cy.wait(500)
        cy.xpath(`//ion-label[.='${optionName}']`).should('exist').click()

      }
    }).then($el =>{

      if (!($el.text().includes(listName))) {
        throw new Error(` ---- List ${listName} was not displayed or does not exist ----`)
      }
    });
  }



  clickEllipsisEditList(listName) {
    cy.intercept({method: 'GET', url:'/list-domain-api/v1/list*',}).as('editList')

    cy.get('.item-card.item').each($el => {

      if ($el.text().includes(listName)) {

        cy.wrap($el).scrollIntoView().should('exist')
        cy.wrap($el).find('ion-icon').click({force: true})
        cy.wait(500)

      }
    }).then($el =>{

      if (!($el.text().includes(listName))) {
        throw new Error(` ---- List ${listName} was not displayed or does not exist ----`)
      }
    });
  }
}