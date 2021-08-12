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
/// <reference types="cypress" />
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

// promisified fs module
const fs = require('fs')
const path = require('path')

function getConfigurationByFile(file) {
	const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

	if (!fs.existsSync(pathToConfigFile)) {
		console.log('No custom config file found.')
		return {}
	}

	return fs.readJson(pathToConfigFile)
}
const AllureWriter = require('@shelex/cypress-allure-plugin/writer')
const cucumber = require('cypress-cucumber-preprocessor').default
const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:32001'
const {addMatchImageSnapshotPlugin} = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
	on('file:preprocessor', cucumber())
	AllureWriter(on, config)
	addMatchImageSnapshotPlugin(on, config)
	on('task', {
		getData({ dbName, collection, filter, output }) {
			return new Promise(resolve => {
				MongoClient.connect(url, (err, client) => {
					if (err) {
						console.log(`MONGO CONNECTION ERROR: ${err}`)
						throw err
					} else {
						const db = client.db(dbName)
						console.log(
							'Db - ' +
								dbName +
								'---- Collection --- ' +
								collection +
								'   --- filter --- ' +
								JSON.stringify(filter)
						)
						let i = 0
						try {
							fs.unlinkSync('cypress/fixtures/' + output + '.json')
						} catch (err) {
							console.log('Error while deleting the responses.json file.' + err)
						}

						db.collection(collection)						
							.find(filter)
							.limit(2)
							.toArray(function (error, docs) {
								if (error) {
									console.log('Error while fetching documents from collection.')
									return
								}
								docs = docs[0]
								//docs = docs.reduce((docs, i) => ({ ...docs, [i.productId]: i }), {});
								client.close()
								console.log('Conectionclose - ' + docs)
								fs.appendFile(
									'cypress/fixtures/' + output + '.json',
									JSON.stringify(docs),
									'utf8',
									function (err) {
										if (err) throw err
										console.log('Data is appended to file successfully.')
										resolve(docs)
									}
								)
							})
					}
				})
			})
		},
	})
}
