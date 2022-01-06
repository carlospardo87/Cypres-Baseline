let reporter = require('cucumber-html-reporter');

module.exports = function (env) {
    reporter.generate(
        {
            theme: 'bootstrap',
            jsonDir: '../results/cypress/reports/test-results/cucumber-json',
            screenshotsDirectory: './cypress/screenshots',
            storeScreenshots: true,
            output: '../results/cypress/reports/report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            metadata: {
                "Test Environment": env,
                "Executed": "Docker Container"
            }
        });
};
