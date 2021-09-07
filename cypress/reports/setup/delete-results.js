#!/usr/bin/env node
const rimraf = require('rimraf')
const chalk = require('chalk')

const testResultsDir = '../results/cypress/reports/test-results/test-*'
const screenshotsResultsDir = '../results/cypress/screenshots/*'
const videosResultsDir = './cypress/videos/*'

rimraf(testResultsDir, () => {
  console.info(chalk.yellow(`    Deleted former test results on : ${testResultsDir}`))
})

rimraf(screenshotsResultsDir, () => {
  console.info(chalk.yellow(`    Deleted former test screenshots on : ${screenshotsResultsDir}`))
})

rimraf(videosResultsDir, () => {
  console.info(chalk.yellow(`    Deleted former test videos on : ${videosResultsDir}`))
})