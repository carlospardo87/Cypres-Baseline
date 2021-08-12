export default class ProductListPage {
	constructor() {
		this.productList = '.listdetailsproductCard'
	}

	verifyProductList() {
		cy.interceptUrl(
			'POST',
			'/product-domain-api/v1/productsummary',
			'productSummary',
			200
		)

		cy.get(this.productList).its('length').should('be.gt', 0)
	}

	selectProduct(product) {
		cy.contains(product).click()
	}
}
