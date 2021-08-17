var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonDir: '../results/cypress/reports/test-results/cucumber-json/',
        screenshotsDirectory: 'cypress/screenshots/',
        storeScreenshots: true,
        output: 'cypress/reports/test-results/automation_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,       
        metadata: {            
            "Test Environment": "DEV",             
            "Executed": "Docker Container"
        }
    };

    reporter.generate(options);