#!/usr/bin/env node
//     #!/bin/bash


const rimraf = require('rimraf')
const chalk = require('chalk')
const fs = require("fs");

const testResultsDir = '../results/'

if(fs.existsSync(testResultsDir)) {
  rimraf(testResultsDir, () => {
    console.info(chalk.yellow(`    Deleted former test results on : ${testResultsDir}\n`))
  });
} else {
  console.info(chalk.yellow(`    Result folder has not been created\n`))
}

