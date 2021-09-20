// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// <reference types="cypress" />
// ***********************************************************

const cucumber = require('cypress-cucumber-preprocessor').default;
const fs = require('fs')
const chalk = require("chalk");
const generateReport = require('../reports/setup/report_old.js')

const sendingEmail = require("../reports/setup/sendEmail");






module.exports = (on, config) => {
	on('file:preprocessor', cucumber())

	on('after:spec', (spec, results) => {
		console.log('Test "%s" has finished in %s',
			spec.name, results.tests[0].state)
	})

	on('after:run',  async (results) => {

		if (results) {
			console.table([
				{
					'totalTests': results.totalTests,
					'totalPassed': results.totalPassed,
					'totalFailed': results.totalFailed,
					'browserName': results.browserName,
					'baseUrl': results.config.baseUrl,
					'viewport': results.config.viewportWidth + 'x' + results.config.viewportHeight
				}
			]);

			generateReport(results.config.baseUrl)

			console.info(chalk.green(`🚀     Sending Email ....     👍`))

			await sendingEmail(results).then((result) => {
				console.log(result)
			});
		}
	})

}



