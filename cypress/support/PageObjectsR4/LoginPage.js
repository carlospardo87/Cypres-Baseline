export default class LoginPage {
	constructor() {
		this.userNameInput = 'input[name="username"]'
		this.passwordInput = 'input[name="password"]'
		this.submitButton = '.buttonL'
	}

	visitLoginPage() {
		cy.visit('/')
	}

	logIn(uname, password) {
		cy.highlightBorderElement(this.userNameInput,'magenta')
		cy.get(this.userNameInput).should('be.visible').type(uname)
		cy.highlightBorderElement(this.userNameInput,'transparent')

		cy.highlightBorderElement(this.passwordInput,'magenta')
		cy.get(this.passwordInput).should('be.visible').type(password,{log:false})
		
		cy.highlightBorderElement(this.passwordInput,'transparent')


		cy.clickElement(
			'GET',
			'/order-domain-api/v1/nextDeliveryDate',
			'auth',
			this.submitButton,
			200
		)
	}

	navigateWithViewPort(device) {
		switch (device) {
			case 'browser':
				cy.viewport(1440, 900)
				break
		}
		cy.visit(Cypress.config('baseUrl'))
	}
}
