'use strict'

export default class HomePage {

  constructor(){
    this.edit_newListName = '.ng-untouched > .native-input'
    this.radioButtonLists = '.mat-radio-outer-circle'
    this.modal_createNewList = 'ion-nav'
    this.btn_createNewList = '.create-new-list'
    this.btn_createList = '.create-list-button'
    this.icon_closeModal = '[name="close-outline"]'
    this.errorCreateNewList = '.list-name-taken-message'
  }

  clickCreateNewList() {
    cy.clickElementForce(this.btn_createNewList, 0)
  }


  clickSelectYourOption(buttonName) {
    cy.clickByName('ion-item', ` ${buttonName} `)
  }


  enterListName(listName) {
    cy.highlightBorderElement(this.edit_newListName, 'magenta')
    cy.get(this.edit_newListName).should('be.visible').type(listName)
    cy.highlightBorderElement(this.edit_newListName, 'transparent')
  }


  clickOnListType(radioButtonOption) {
    switch (radioButtonOption) {
      case 'Public':
        cy.clickElementForce(this.radioButtonLists, 0)
        break
      case 'Internal':
        cy.clickElementForce(this.radioButtonLists, 1)
        break
      case 'Private':
        cy.clickElementForce(this.radioButtonLists, 2)
        break
      default:
        cy.get(this.radioButtonLists).should('not.exist')
        break
    }
  }

  clickOnCreate(buttonName) {
    cy.clickByName('ion-button', ` ${buttonName} `)
  }


  checkModalAppears() {
    cy.shouldElement(this.modal_createNewList , 0, 'be.visible')
  }

  checkButtonEnable() {
    cy.highlightBorderElement(this.btn_createList, 'magenta')
    cy.get(this.btn_createList).invoke('attr', 'class').should('not.contain', 'button-disabled')
    cy.highlightBorderElement(this.btn_createList, 'transparent')
  }

  clickButtonCreate() {
    cy.clickElement(this.btn_createList, 0)
  }

  closeCreateNewListModal() {
    cy.clickElement(this.icon_closeModal, 0)
  }

  checkErrorMessage(errorMessage) {
   // cy.shouldElement(this.errorCreateNewList, 0, 'equal', errorMessage)

    cy.contains(this.errorCreateNewList, errorMessage)
  }

  checkTotalOfListType(totalListType) {
    if (totalListType === 'None') {
      cy.get(this.radioButtonLists).should('not.exist');
    } else {
      cy.get(this.radioButtonLists).its('length').then(eleLen =>{
        expect(eleLen).to.be.equal(Number(totalListType))
      });
    }


  }
}