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




let failedTest = []

module.exports = (on, config) => {

	// file:preprocessor , processing the cucumber commands
	on('file:preprocessor', cucumber())

	// after:spec : we can use to make thing after each scenario is completed
	on('after:spec', (spec, results) => {
		console.log('Test "%s" has finished in %s',
			spec.name, results.tests[0].state)

		if (results.tests[0].state === 'failed') {
			failedTest.push('🔥 '+ spec.name +'<br>')
		}
	})

	// after:run: we can use it to generate a report and send it by email
	on('after:run',  async (results) => {

		if (results) {
			console.table([
				{
					'totalTests': results.totalTests,
					'totalPassed': results.totalPassed,
					'totalFailed': results.totalFailed,
					'browserName': results.browserName,
					'baseUrl': results.config.baseUrl,
					'viewport': results.config.viewportWidth + 'x' + results.config.viewportHeight,
					'totalDuration:': ((parseFloat(results.totalDuration))/1000).toFixed(0),
				}
			]);

			generateReport(results.config.baseUrl)

			console.info(chalk.bold.green(`🚀 Sending Email ....     👍`))

			await sendingEmail(results,failedTest).then((result) => {
				console.log(result)
			});
		}
	})

}



