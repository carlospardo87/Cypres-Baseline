let reporter = require('cucumber-html-reporter');

let options = {
        theme: 'bootstrap',
        jsonDir: './cypress/reports/test-results/cucumber-json',
        screenshotsDirectory: './cypress/screenshots',
        storeScreenshots: true,
        output: './cypress/reports/test-results/report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,       
        metadata: {            
            "Test Environment": "DEV",             
            "Executed": "Docker Container"
        }
    };

    reporter.generate(options);