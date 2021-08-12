import HomePage from '../../../support/PageObjectsR4/HomePage'
import LoginPage from '../../../support/PageObjectsR4/LoginPage'
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

Given('User on USF login page', () => {
	cy.visit('/')
})


When(/^User logs in with valid credentials "([^"]*)" and "([^"]*)"$/, (uname,password) => {
	new LoginPage().logIn(uname, password)
	
});
 
Then('User should be able to see My list icon on home page', () => {
	new HomePage().verifyListButton()
})



Given(/^User navigates to USF with "([^"]*)"$/, (device) => {
	
	switch (device) {
		case 'browser':
			cy.viewport(1440, 900)
			break
		case 'iphone': 			
			cy.viewport('iphone-5')
			break
	}
	cy.visit('/')
	
})

afterEach(() => {
	Cypress.on('uncaught:exception', (err, runnable) => {
		return false
	})
})
