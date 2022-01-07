

### 1 - INSTALL CYPRESS
#### https://docs.cypress.io/guides/getting-started/installing-cypress#Installing


### 2- DONWLOAD REPOSITORY AND INSTALL DEPENDENCIES
####  npm install --force 


### 3 - OPEN CYPRESS   - NOTE: FIRST OPENING CYPRESS COULD FAIL,  TRY AGAIN IF THIS IS HAPPENING 
####  npx cypress open 


### 3 - RUN CUCUMBER TAGS HEADLESS MODE (REPORT IS GENERATED AUTOMATICALLY)
####  npx cypress-tags run -e TAGS='@tagName' 

### DELETE FORMER RESULTS
####  node cypress/reports/setup/delete-results.js

### CREATE REPORT
####   node cypress/reports/setup/report.js  (NEW VERSION WITH SCREENSHOT)
####   node cypress/reports/setup/report_old.js  (OLD VERSION)


### PATH TESTS
####  cypress/integration/features/ui/tests
####  cypress/integration/features/api/tests




