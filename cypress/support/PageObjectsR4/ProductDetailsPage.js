'use strict'

let prdNum = ''

export default class ProductDetailsPage {
	constructor() {
		this.productTitle = '.product-title'
		this.basicInformation = '.basic-information'		
		this.directProductIcon = '.direct-icon'
		this.quantityField = '.quantity-box'
		this.productDetailsTitle = 'ion-grid.md > ion-row.md > .md'
		this.locallySourced = '.locally-sourced-content'
		this.noReturnsText = '.direct-read-out'
		this.inventory = 'app-product-inventory-info'
		this.pillRow = '.product-tags'
		this.informationButton ='.product-tags > button'
		this.vendorMessage ='.jit-vendor-message'
		
	}

	verifyProductDescription() {
		cy.get(this.productTitle).should('be.visible').and('contain',product.productDescTxtl)
	}

	verifyProductNumber() { 
		cy.log(product.productNumber)
		cy.get(this.basicInformation).should('be.visible').and('contain', product.productNumber)
	}

	verifyPackSize() {
		cy.log(product.corpProduct.packSize)		
		cy.get(this.basicInformation).should('be.visible').and('contain',product.corpProduct.packSize.toLowerCase())
	}

	verifyQuantityField() {
		cy.get(this.quantityField).should('be.visible')
	}

	verifyPdpPage() {
		cy.get(this.productDetailsTitle)
			.scrollTo('bottom', { ensureScrollable: false })
			.should('be.visible')
	}

	goToProduct(productNumber) {
		cy.navigateTo(
			'POST',
			'/product-domain-api/v1/productsummary',
			'productSummary',
			`${Cypress.config('baseUrl')}desktop/products/${productNumber}`,
			200
		)
	}

	verifyLocallySourced() {
		cy.highlightBorderElement(this.pillRow,'magenta')
		cy.get(this.pillRow).should('be.visible').and('contain', 'LOCALLY SOURCED')
		cy.highlightBorderElement(this.pillRow,'transparent')
	}

	verifyJITProduct(text) {
		cy.highlightBorderElement(this.pillRow,'magenta')
		cy.get(this.informationButton).should('be.visible')
		cy.highlightBorderElement(this.pillRow,'transparent')

		cy.highlightBorderElement(this.pillRow,'magenta')
		cy.get(this.vendorMessage).should('be.visible').and('contain',text )
		cy.highlightBorderElement(this.pillRow,'transparent')

		
	}

	goToProductChangingInventoryNumber(productNumber,breakableVal){
		if (breakableVal == 'true'){breakableVal = true}
		else{breakableVal= false}
		cy.visit(`${Cypress.config('baseUrl')}products/${productNumber}`)
		
		cy.intercept({
			method:'POST' ,
			url:'/product-domain-api/v1/productsummary'	
			
		  }, (req) => {
			req.reply((res) => {
			  console.log(res)
			  res.body[0].breakable = breakableVal
			  return res
			})
		  }).as("productSummary")
		
		
		
		cy.intercept({
			method: 'POST',
			url: 'product-domain-api/v1/productinventory'
			
		}).as("inventoryOnHand")

		cy.wait('@productSummary').its('response.statusCode').should('eq', 200)
		cy.wait('@inventoryOnHand').its('response.statusCode').should('eq', 200)

	}



	verifyInventoryOnHandNumberBreakable(inventoryQuantity) {
		inventoryQuantity == '1000' ? (inventoryQuantity = 999) : inventoryQuantity
		inventoryQuantity == 'Direct' ? (inventoryQuantity = 0) : inventoryQuantity
		cy.log(inventoryQuantity)
		cy.get(this.inventory).eq(0).should('contain', inventoryQuantity)
		cy.get(this.inventory).eq(1).should('contain', 0)
	}

	verifyInventoryOnHandNumber(inventoryOnHand) {
		inventoryOnHand == '1000' ? (inventoryOnHand = 999) : inventoryOnHand
		inventoryOnHand == 'Direct' ? (inventoryOnHand = 0) : inventoryOnHand
		cy.log(inventoryOnHand)
		cy.get(this.inventory).should('contain', inventoryOnHand)
	}

	verifyDirectProductIcon() {
		cy.highlightBorderElement(this.pillRow,'magenta')			
		cy.get(this.pillRow).should('be.visible').and('contain', 'DIRECT')
		cy.highlightBorderElement(this.pillRow,'transparent')
	}

	verifyNoReturnText() {
		cy.highlightBorderElement(this.noReturnsText,'magenta')
		cy.get(this.noReturnsText).should('be.visible').and('contain', 'No returns')
		cy.screenshot()
		cy.highlightBorderElement(this.noReturnsText,'transparent')
	}
}
