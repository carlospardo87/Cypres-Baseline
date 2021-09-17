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




module.exports = (on, config) => {
	on('file:preprocessor', cucumber())

	on('after:spec', (spec, results) => {
		console.log('Test "%s" has finished in %s',
			spec.name, results.tests[0].state)
	})

	on('after:run', (results) => {

		if (results) {

				try {
					fs.writeFileSync('../results/cypress/storeResult.js', JSON.stringify(results), {flag: 'wx'})
					console.info(chalk.green(`🚀     Result was written successfully     👍`))
				} catch (err) {
					console.error(err)
				}

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
		}
		//console.log(resultInfo)

	})

}



