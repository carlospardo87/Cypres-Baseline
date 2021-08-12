import ProductDetailsPage from '../../../support/PageObjectsR4/ProductDetailsPage'

import {
	After,
	Before,
	Given,
	And,
	Then,
	When,
} from 'cypress-cucumber-preprocessor/steps'

const productDetailsPage = new ProductDetailsPage()

Then(/^use default text Just in Time and return as part of product information.$/, () => {
    productDetailsPage.verifyJITProduct('Just In Time' )
});


