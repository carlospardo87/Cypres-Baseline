
// Header data
const data = {
	consumer_id: 'ecom',
	content_type: 'application/json',
	correlation_id: 'ecomr4-d4908679-5a70-42d5-9d3e-8c1bcf21e352',
	transaction_id: 'tmid2',
  }
  
  
  Cypress.Commands.add("getAuthToken", () => {
	cy.api({method: "POST", url: `${Cypress.config('baseApi')}/auth-api/v1/oauth/token`,
	  headers: {
		"Authorization": "Bearer undefined",
		"consumer-id": data.consumer_id,
		"Content-type": data.content_type,
		"correlation-id": data.correlation_id,
		"transaction-id": data.transaction_id,
	  },
	  body: {
		username: "tmid2",
		password: "V2VsY29tZTEy",
		grantType: "password",
		scopes: "usf-list usf-order usf-user usf-customer usf-product",
		platform: "DESKTOP",
		authContext: {
		  divisionNumber: 0,
		  customerNumber: 0,
		  departmentNumber: 0,
		},
		refreshToken: ""
	  }
	}).as('getAuthToken')
  })
  
  Cypress.Commands.add("getProductSummary", (response,productNum) => {
	cy.api({method: "POST", url: `${Cypress.config("baseApi")}/product-domain-api/v1/productsummary`,
	  headers: {
		"Authorization": `Bearer ${response.body.accessToken}`,
		"consumer-id": data.consumer_id,
		"Content-type": data.content_type,
		"correlation-id": data.correlation_id,
		"transaction-id": data.transaction_id,
	  },
	  body: [Number(productNum)],
	}).as('getProductSummary')
  });
  
  
  Cypress.Commands.add("getProductInventory", (response,productNum) => {
	cy.api({method: "POST", url: `${Cypress.config("baseApi")}/product-domain-api/v1/productinventory`,
	  headers: {
		"Authorization": `Bearer ${response.body.accessToken}`,
		"consumer-id": data.consumer_id,
		"Content-type": data.content_type,
		"correlation-id": data.correlation_id,
		"transaction-id": data.transaction_id,
	  },
	  body: [Number(productNum)],
	}).as('getProductInventory')
  });
  
  
  Cypress.Commands.add("getProductPricing", (response,productNum) => {
	cy.api({method: "POST", url: `${Cypress.config("baseApi")}/price-domain-api/v1/pricing`,
	  headers: {
		"Authorization": `Bearer ${response.body.accessToken}`,
		"consumer-id": data.consumer_id,
		"Content-type": data.content_type,
		"correlation-id": data.correlation_id,
		"transaction-id": data.transaction_id,
	  },
	  body: {"productNumbers":[Number(productNum)]},
	}).as('getProductPricing')
  });
  
  
  
  Cypress.Commands.add('checkStatusCode', (alias, statusCode) => {
	cy.get(alias).then((response) => {
	  expect(response).property('status').to.equal(Number(statusCode));
	})
  })
  