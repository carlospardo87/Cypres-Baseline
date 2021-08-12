'use strict'

export default class AllListPage {
	constructor() {
		this.allListsTitle = '.viewAllLists'
		this.publicListTitle = ':nth-child(1) > ion-list-header.md'
		this.usfListTitle = '.ion-no-padding > :nth-child(2) > ion-list-header.md'
		this.internalListTitle = 'section > :nth-child(2) > ion-list-header.md'
		this.privateListTitle = ':nth-child(3) > ion-list-header.md'
		this.firstElementOnList = 'section > :nth-child(1) > :nth-child(2)'
	}

	selectList(list) {
		cy.clickElementIfContain(
			'GET',
			'/list-domain-api/v1/listItems',
			'listItems',
			list,
			200
		)
	}
	verifyPrivateList() {
		cy.get(this.internalListTitle).should('be.visible')
	}

	verifyPublicList() {
		cy.get(this.publicListTitle).should('be.visible')
	}

	verifyInternalList() {
		cy.get(this.privateListTitle).should('be.visible')
	}

	verifyUSFList() {
		cy.get(this.usfListTitle).should('be.visible')
	}

	verifyAllListsPage() {
		cy.get(this.allListsTitle).should('be.visible')
		cy.get(this.publicListTitle).should('be.visible')
	}

	clickOnFirstList() {
		cy.get(this.firstElementOnList).click()
	}
}
