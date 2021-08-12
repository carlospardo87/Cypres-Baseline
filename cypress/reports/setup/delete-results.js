#!/usr/bin/env node
const rimraf = require('rimraf')
const chalk = require('chalk')

const testResultsDir = './cypress/reports/test-results'

rimraf(testResultsDir, () => {
  console.info(chalk.yellow('    Deleted former test results.'))
})