

### INSTALL CYPRESS
#### https://docs.cypress.io/guides/getting-started/installing-cypress#Installing


### INSTALL DEPENDENCIES
####  npm install --force 


### OPEN CYPRESS   - NOTE: FIRST OPENING CYPRESS COULD FAIL,  TRY AGAIN IF THIS IS HAPPENING 
####  npx cypress open 


### RUN CUCUMBER TAGS HEADLESS MODE  (REPORT IS GENERATED AUTOMATICALLY)
####  npx cypress-tags run -e TAGS='@tagName' 

### DELETE FORMER RESULTS
####  node cypress/reports/setup/delete-results.js

### CREATE REPORT
####   node cypress/reports/setup/report.js  (NEW VERSION)
####   node cypress/reports/setup/report_old.js  (OLD VERSION)


### PATH TESTS
####  cypress/integration/features/ui/tests
####  cypress/integration/features/api/tests




