import HomePage from '../../../support/PageObjectsR4/HomePage'
import LoginPage from '../../../support/PageObjectsR4/LoginPage'
import AllListPage from '../../../support/PageObjectsR4/AllListPage'
import ProductListPage from '../../../support/PageObjectsR4/ProductListPage'
import ProductDetailsPage from '../../../support/PageObjectsR4/ProductDetailsPage'

import {
	After,
	Before,
	Given,
	And,
	Then,
	When,
} from 'cypress-cucumber-preprocessor/steps'

const loginPage = new LoginPage()
const homePage = new HomePage()
const allListPage = new AllListPage()
const productList = new ProductListPage()
const productDetailsPage = new ProductDetailsPage()


And(/^navigates to  product details page$/, () => {

	productDetailsPage.goToProduct(product.productNumber)
	cy.log(product.productNumber)
	
});


Then(/^selects a customer$/, () => {
	new HomePage().selectCustomer(customer.customerNumber)
});

/*
And(/^navigates to  product details page "([^"]*)"$/, (breakable) => {
	productDetailsPage.goToProductChangingInventoryNumber(product.productNumber,breakable)
});
*/



And(/^navigates to  product details page "([^"]*)" and "([^"]*)"$/, (breakable,direct) => {
	console.log(breakable,direct);
	productDetailsPage.goToProductChangingInventoryNumber(
		breakable,
		direct
	)
});
