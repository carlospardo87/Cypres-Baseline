import dbQuery from '../../../support/dbQuery'
import {
	After,
	Before,
	Given,
	And,
	Then,
	When,
} from 'cypress-cucumber-preprocessor/steps'

const db = new dbQuery()

Given(/^A direct eligible customer$/, () => {
	//db.customerDirectEligible()
	cy.fixture('customers/customerDirectEligible').then(function (dataQuery) {
		globalThis.customer = dataQuery
	})
})

And(/^A direct product$/, () => {
	cy.log('Customer Num: ' + customer.customerNumber)
	cy.log('Division Num: ' + customer.divisionNumber)
	//db.directProduct(customer.divisionNumber)

	cy.fixture('products/directProduct').then(function (dataQuery) {
		globalThis.product = dataQuery
	})
})

Given(/^A customer$/, () => {
	//db.customer()
	cy.fixture('customers/customer').then(function (dataQuery) {
		globalThis.customer = dataQuery
	})
})

And(/^A locally sourced product$/, () => {
	cy.log('Customer: ' + customer.customerNumber)
	cy.log('Division: ' + customer.divisionNumber)
	//db.locallySourcedProduct(customer.divisionNumber)
	cy.fixture('products/locallySourcedProduct').then(function (dataQuery) {
		globalThis.product = dataQuery
	})
})

And(/^A product$/, () => {
	//db.product(customer.divisionNumber)
	cy.log('Customer Num: ' + customer.customerNumber)
	cy.log('Division Num: ' + customer.divisionNumber)
	cy.fixture('products/product').then(function (dataQuery) {
		globalThis.product = dataQuery
	})
})


When(/^A Product is JIT not direct not CES with no text in special vendor$/, () => {
	cy.log('Customer Num: ' + customer.customerNumber)
	cy.log('Division Num: ' + customer.divisionNumber)

	//db.jitProduct(customer.divisionNumber)
	
	
	cy.fixture('products/jitProduct').then(function (dataQuery) {
	globalThis.product = dataQuery
	})
});


Then(/^A Product is JIT not direct not CES$/, () => {
	
	cy.log('Customer Num: ' + customer.customerNumber)
	cy.log('Division Num: ' + customer.divisionNumber)

	//db.jitProduct(customer.divisionNumber)
	
	
	cy.fixture('products/product').then(function (dataQuery) {
	globalThis.product = dataQuery
	})
})
