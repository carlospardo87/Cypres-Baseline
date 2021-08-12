export default class HomePage {
	constructor() {
		this.myListButton = '.extraLeftMargin'
		this.customerSelect = '.outlinedGreenBtn'
		this.searchCustomer = '.sc-ion-input-ios-h > .native-input'
		
	}

	clickMyListButton() {
		// intercepts list api
		cy.intercept({ method: 'GET', url: `/list-domain-api/v1/lists?*` }).as(
			'list'
		)

		cy.get(this.myListButton).click()

		// wait to list api response with code 200
		cy.wait('@list').its('response.statusCode').should('eq', 200)
	}


	selectCustomer(customerName) {
		cy.intercept({
			method: 'GET',
			url: `/customer-domain-api/v1/customers`,
		}).as('customer')
		// select customer if is not the one for the test
		cy.get(this.customerSelect).then((custm)=>{
			if (!custm.text().trim().includes(customerName)){
				cy.highlightBorderElement(this.customerSelect,'magenta')
				cy.get(this.customerSelect).click()
				cy.highlightBorderElement(this.customerSelect,'transparent')		
				cy.contains(customerName).click({force: true})
				// wait to list api response with code 200		
				cy.wait('@customer').its('response.statusCode').should('eq', 200)
			}
		})	

	}
}
