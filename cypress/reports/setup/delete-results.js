#!/usr/bin/env node
const rimraf = require('rimraf')
const chalk = require('chalk')

const testResultsDir = '../results'

rimraf(testResultsDir, () => {
  console.info(chalk.yellow(`    Deleted former test results on : ${testResultsDir}`))
})
