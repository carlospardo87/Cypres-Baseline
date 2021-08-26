'use strict'

export default class EditListPage {

  constructor() {
    this.radioButton = '.mat-radio-outer-circle'
    this.groupButtons = '.list-groups-button > span'
    this.groupTitle = '.list-management-page-group-name'
  }


  checkRadioButton() {
    cy.get(this.radioButton).eq(0).should('be.visible').dblclick({force: true})
    cy.get('mat-radio-button').first().should('have.class', 'mat-radio-button mat-accent mat-radio-checked')

    cy.get(this.radioButton).eq(1).should('be.visible').dblclick({force: true})
    cy.get('mat-radio-button').first().should('have.class', 'mat-radio-button mat-accent')
  }


  checkGroups() {
    cy.get(this.groupButtons).each($groupsButton =>{

      cy.highlightBorderElement($groupsButton, 'magenta')

      cy.wrap($groupsButton).should('be.visible').click({ force: true})
      let buttonName = $groupsButton.text()
        .replace("\u00a0","")
        .replace(/[(]/,'').replace(/[)]/,'').replace(/\s/g, '')

      cy.get(this.groupTitle).then($groupName=>{
        let title_listName = $groupName.text()
          .replace("\u00a0","").replace(/\s/g, '')
        cy.log(title_listName)
        cy.highlightBorderElement($groupName, 'magenta')

        expect(title_listName).to.includes(buttonName);
        cy.highlightBorderElement($groupsButton, 'transparent')
        cy.highlightBorderElement($groupName, 'transparent');
      });
    });
  }
}